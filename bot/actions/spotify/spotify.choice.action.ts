/** @format */

import { Markup } from "telegraf";
import { IBotContext } from "../../context/context.interface";
import { giveawaysLink, reviewsLink, supportLink } from "../../const/const";
import { IService } from "../../db/models/service.model";
import { resolve } from "path";
import promocodeService from "../../db/services/promocode.service";
import { IPromocode } from "../../db/models/promocode.model";

const spotifyChoiceAction = async (
	ctx: IBotContext,
	message_id: number | undefined,
	service: IService
) => {
	try {
		const months = service.months + "m";
		const source = resolve(`./bot/assets/spotify/spotify_${months}.png`);
		const userId = ctx.chat?.id;
		if (!userId) {
			await ctx.reply("Что-то по2шло не так, попробуйте еще раз.");
			return;
		}
		const userPromocode: IPromocode | undefined | string =
			await promocodeService.getUserPromocode(userId);
		let price = service.price;
		let caption = `Тариф: <b>${service.tariff}</b>\nЦена: <b>${price}р</b>`;

		if (typeof userPromocode !== "string" && userPromocode) {
			price = Math.floor(
				(service.price / 100) * (100 - userPromocode.discount)
			);
			caption = `Тариф: <b>${service.tariff}</b>\nЦена: <b>${price}р</b>\nПромокод: <b>${userPromocode.title} на ${userPromocode.discount}%</b>`;
		}

		caption +=
			"";
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
					inline_keyboard: [
						[Markup.button.callback("Купить", `data_buy_spotify_${months}`)],
						[Markup.button.callback("◀️ Назад", "data_back_to_spotify")],
						[
							Markup.button.url("Отзывы ⭐", reviewsLink),
							// Markup.button.url("Розыгрыши 🏆", giveawaysLink),
						],
						[Markup.button.url("Связаться с нами 🤖", supportLink)],
					],
				},
			}
		);
	} catch (e) {
		console.log(e);
	}
};

export default spotifyChoiceAction;
