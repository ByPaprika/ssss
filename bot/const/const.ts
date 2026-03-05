/** @format */

// main
export const supportLink = "https://t.me/SpotiTime_help";
export const supportNickname = "@SpotiTime_support";

export const reviewsLink = "https://t.me/SpotiTime_ru_reviews";
export const reviewsNickname = "@SpotiTime_ru_reviews";

export const giveawaysLink = "https://t.me/SpotiTime_ru_giveaways";
export const giveawaysNickname = "@SpotiTime_ru_reviews_giveaways";

export const botLink = "https://t.me/SpotiTime_help";
export const botNickname = "@SpotiTime_help";

export const support_chat_id = "5762480244";
export const offerLink = "https://telegra.ph/Publichnaya-oferta-03-27-4";
// support link...

// on messages
export const onAllowMessages: string[] = [
	// main
	"Spotify Premium 🎸",
	"Ввести промокод 🎫",
	"Акции 🤑",
	"Связаться с нами 🤖",
	"Отзывы ⭐",
	// "Розыгрыши 🏆",
	"О нас ⁉️",
	"test",
];

//captions(funcs)
export const getGreetingCaption = (
	first_name: string,
	reviews_link: string,
	giveaways_link: string,
	support_link: string
) =>
	`Привет, <b>${first_name}</b>\nМеня звать <b>SpotiTime Бот</b> 🤖\nЯ ваш личный бот и помощник в индустрии <b>Spotify</b>!\n\nЯ помогаю оформлять подписку на <b>Spotify</b>\nНесмотря на то, что коммерческие отношения с Россией ушли на второй план, благодаря мне, вы сможете приобрести любимый <b>Spotify</b>\n\nТакже у нас имеется группа с <b>отзывами</b>\nПерейти в группу с <b>отзывами</b> 👨‍👩‍👧‍👦 - ${reviews_link}\n\nЕсли у вас есть любые интересующие <b>вопросы</b>, вы всегда можете задать вопрос нашей <b>техподдержке</b>.\nВам моментально ответят - ${support_link}`;

export const getSpotifyCaption = (support_link: string) =>
	`😊 С нашей <b>Spotify</b> подпиской <b>VPN</b> не потребуется во всех приложениях Spotify\n❗️Если у вас нет аккаунта или вы не помните данных, мы <b>создадим</b> для вас новый или <b>восстановим</b> прошлый\n⏱️ Сроки выполнения: от <b>5</b> минут до <b>2</b> часов`;

export const getSpotifyOpoCaption = (support_link: string) =>
	`Spotify Premium на <b>2</b> аккаунта\n\n😊 С нашей <b>Spotify</b> подпиской <b>VPN</b> не потребуется во всех приложениях Spotify.\n❗️Если у вас нет аккаунта или вы не помните данных, мы <b>создадим</b> для вас новый или <b>восстановим</b> прошлый.\n⏱️ Сроки выполнения: от <b>5</b> минут до <b>2</b> часов.\n❗️ После оплаты c <b>Вами</b> сразу свяжется техподдержка - ${support_link}.\n<b><i>❗️В случае, если не удается оплатить, отпишите в техподдержку, вам сразу помогут!</i></b>`;

//captions static
export const errorCaption =
	"Я не знаю такой команды 😶\nНапишите <code>/start</code>, чтобы начать сначала.";

export const reviewsCaption =
	"Если <b>Вы</b> все еще сомневаетесь в <b>честности</b> нашего сервиса, то всегда можете посмотреть <b>отзывы</b>  ⬇️";

export const giveawaysCaption =
	"Каждый день, специально для <b>Вас</b>, мы проводим <b>розыгрыши</b> 🎲\n(Подписки, Промокоды и многое другое)";

export const supportCaption =
	"❗Мы <b>всегда</b> в онлайне и <b>ответим</b> на любой интересующий <b>вопрос</b>\nP.S. Можно обращаться по <b>всем</b>, связанными со <b>Spotify</b>, вопросам";

export const popularQueCaption = `<b>Популярные вопросы:</b>\n\n🇮🇳 <b>Какой регион будет у моего аккаунта после покупки?</b>\n— У вас будет стоять регион  Индия\n\n⏳ <b>Сколько времени занимает подключение? </b>\n— Срок выполнения заявки от 10 минут до 2 часов\n\n🏷 <b>Как применить промокод?</b>\n— Нажмите [ <i>Ввести промокод - после, останется лишь выбрать тариф подписки и оплатить</i> ]\n\n🚨 <b>У меня вылезает ошибка при оплате, что делать ?</b>\n— Напишите нам - @SpotiTime_ru_support, и мы подскажем вам актуальные реквизиты для оплаты\n\n🎸<b> Сохранится ли моя музыка при покупке у Вас?</b>\n— Да, вы продолжите пользоваться своим аккаунтом без потери треков\n\n📲 <b>Как установить приложение?</b>\n— Обратитесь в поддержку и мы поможем установить приложение - @SpotiTime_ru_support\n\n🪪 <b>Что делать если у вас нет аккаунта или не помните данных?</b>\n— Если у вас нет аккаунта или вы не помните данных, мы создадим для вас новый или восстановим прошлый\n\n😧 <b>Оплатил, ничего не происходит, что делать?</b>\n— В таком случае не беспокойтесь, если в течении 2 часов с вами не связались, то напишите нам сами - @SpotiTime_ru_support`;

export const offersCaption =
	"💸 Можете попробовать наши специальные предложения:";

export const offerInstCaption = `<b>АКЦИЯ «Сторис в Instagram»</b>\n\n<b>Условия</b>:\n1. Выложи у себя в истории <b>Instagram</b> одну из <b>фото с ссылкой</b> на нашего бота.\n2. Отправь скрин истории сюда -> ${supportNickname}, в ответ ты получишь персональный промокод <b>с 15% скидкой</b>.\n\n<i>Ссылка на нашего бота:</i> ${botLink}\n<i>Текст кнопки:</i> Любой\n\nP.S Если вдруг ты не знаешь, как вставить ссылку в истории, отпиши технической поддержке - ${supportNickname}`;

export const opoCaption = `<b>АКЦИЯ «1 + 1»</b>\n\nПри покупки <b>сразу 2</b> подписок <b>Spotify Premium</b> будет действовать <b>скидка 15%</b>\n\n P.S. Если хотите воспользоваться акцией, нажмите на кнопку ниже и выберите подходящий тариф <b>(3, 6, 12 месяцев)</b>, цена автоматически изменится
`;
