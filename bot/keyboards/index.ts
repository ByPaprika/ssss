
import { Markup } from "telegraf";
import { offerLink, reviewsLink, supportLink } from "../const/const";

export const greetingKeyboard = [
	["Spotify Premium 🎸"],
	["Ввести промокод 🎫", "Акции 🤑"],
	["Отзывы ⭐","О нас ⁉️", "Связаться с нами 🤖"],
];

export const offerKeyboard = [
	[Markup.button.callback("1️⃣ + 1️⃣", "data_offer_one_plus_one")],
	[Markup.button.callback("Сторис в Instagram 📲", "data_offer_inst_story")],
];

export const spotifyKeyboard = [
	[Markup.button.callback("⚡️ Spotify Premium 1 месяц", "data_gpt_1m")],
	[Markup.button.callback("Spotify Premium 3 месяца", "data_spotify_3m")],
	[Markup.button.callback("Spotify Premium 6 месяцев", "data_spotify_6m")],
	[Markup.button.callback("Spotify Premium 12 месяцев", "data_spotify_12m")],
	[
		Markup.button.url("Отзывы ⭐", reviewsLink),
		Markup.button.url("О нас ⁉️", offerLink),
	],
	[Markup.button.url("Связаться с нами 🤖", supportLink)],
];


export const spotifyOpoKeyboard = [
	[Markup.button.callback("Spotify Premium 3 месяца", "data_opo_spotify_3m")],
	[Markup.button.callback("Spotify Premium 6 месяцев", "data_opo_spotify_6m")],
	[Markup.button.callback("Spotify Premium 12 месяцев", "data_opo_spotify_12m")],
	[
		Markup.button.url("Отзывы ⭐", reviewsLink),
		Markup.button.url("О нас ⁉️", offerLink),
	],
	[Markup.button.url("Связаться с нами 🤖", supportLink)],
];
