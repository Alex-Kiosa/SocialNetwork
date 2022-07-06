import {v1} from "uuid";
import funder1 from "../assets/img/fundraising/funder-1.jpg";
import funder2 from "../assets/img/fundraising/funder-2.jpg";
import funder3 from "../assets/img/fundraising/funder-3.jpg";

export const state = {
    profilePage : {
        posts: [
            {text: "React - это JS библиотека, для эфективной отрисовки (рендеринга) SPA или другрими словами одностраничных вебприложений. Что это значит? Реакт подгружает один html документ, в котором мало html и много js. Далее он отслеживает изменение конкретного узла, элемента, и при необходимости рендерит только его, а не всю все страницу, в отличие от класической работы вебсайтов.", likes: 13},
            {text: "Установка приложения на TS: yarn create react-app my-app --template typescript", likes: 4}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: "Uinston_Cherchill"},
            {id: v1(), name: "Napoleon Hill"},
            {id: v1(), name: "Albert Einstein"},
            {id: v1(), name: "Amelia Earhart"}
        ],
        messages: [
            {id: v1(), message : "Никогда, никогда, вашу мать, не сдавайтесь!"},
            {id: v1(), message: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь"},
            {id: v1(), message: "Стремитесь не к успеху, а к ценностям, которые он дает"},
            {id: v1(), message: "Сложнее всего начать действовать, все остальное зависит только от упорства."}
        ]
    },
    fundraisingPage: {
        fundPosts: [
           {id: v1(), image: {funder1}, title: "Naveen's Boston Marathon & Charles River Marathon", countPeoples: 142},
           {id: v1(), image: {funder2}, title: "Naveen's Boston Marathon & Charles River Marathon", countPeoples: 142},
           {id: v1(), image: {funder3}, title: "Naveen's Boston Marathon & Charles River Marathon", countPeoples: 142},
       ]
    }
}