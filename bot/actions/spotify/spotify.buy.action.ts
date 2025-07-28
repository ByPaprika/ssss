/** @format */

import SHA256 from "sha256";
import { v4 as uuid } from "uuid";
import { IConfigService } from "../../../config/config.interface";
import { IBotContext } from "../../context/context.interface";
import { IService } from "../../db/models/service.model";
import OrderService from "../../db/services/order.service";
import { resolve } from "path";
import { Markup } from "telegraf";
import { supportLink } from "../../const/const";
import axios from "axios";

import promocodeService from "../../db/services/promocode.service";
import { IPromocode } from "../../db/models/promocode.model";

const spotifyBuyAction = async (
	ctx: IBotContext,
	message_id: number | undefined,
	service: IService,
	configService: IConfigService
) => {
	try {
		const customerId = ctx.chat?.id;
		if (!customerId) {
			await ctx.reply("Что-то пошло не так, попробуйте еще раз.");
			return;
		}
		const months = service.months + "m";
		const source = resolve(`./bot/assets/spotify/spotify_${months}.png`);
		let amount = service.price;
		let caption = `Тариф: <b>${service.tariff}</b>\nЦена: <b>${amount}р</b>`;

		const userPromocode: IPromocode | undefined | string =
			await promocodeService.getUserPromocode(customerId);

		if (typeof userPromocode !== "string" && userPromocode) {
			amount = Math.floor(
				(service.price / 100) * (100 - userPromocode.discount)
			);
			caption = `Тариф: <b>${service.tariff}</b>\nЦена: <b>${amount}р</b>\nПромокод: <b>${userPromocode.title} на ${userPromocode.discount}%</b>`;
		}

		caption +=
			"\n\nНажмите <b>«К оплате»</b>, чтобы связаться с нашим менеджером.\n <b><i>💳❗️ Он предоставит все необходимые реквизиты для оплаты и ответит на ваши вопросы. </i></b>";
 
		const merchant_id = configService.get("AAIO_MERCHANT_ID");
		const order_id = uuid();
		const desc = service.tariff.split(" ").join("+");
		const currency = "RUB";
		const url = configService.get("AAIO_PAY_LINK");
		const sign = SHA256(
			`${merchant_id}:${amount}:${currency}:${configService.get(
				"AAIO_SECRET_KEY_1"
			)}:${order_id}`
		);

		const fetchAAIOLink = `${url}?merchant_id=${merchant_id}&amount=${amount}&currency=${currency}&order_id=${order_id}&sign=${sign}&desc=${desc}&lang=ru`;

		await axios.get(fetchAAIOLink);

		
	

		const used_promocode =
			typeof userPromocode !== "string" && userPromocode
				? userPromocode.title
				: " ";

		const order = await OrderService.createOrder(
			customerId,
			service.title,
			service.tariff,
			amount,
			service.months,
			service.query,
			order_id,
			"in_process",
			"aaa",
			used_promocode
		);

		if (order) {
			await ctx.telegram.editMessageMedia(
				ctx.chat?.id,
				message_id,
				"",
				{
					media: { source },
					type: "photo",
					caption,
					parse_mode: "HTML",
				},
				{
					reply_markup: {
						inline_keyboard: [[Markup.button.url("К оплате", supportLink)]],
					},
				}
			);
		}
	} catch (e) {
		console.log(e);
		await ctx.reply("Что-то пошло не так, попробуйте еще раз.");
	}
};

export default spotifyBuyAction;
