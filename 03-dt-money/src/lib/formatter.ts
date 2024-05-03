export const dateFormatter = new Intl.DateTimeFormat("pt-BR")

export const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency", //Formata como moeda
  currency: "BRL", //Formata com o tipo da moeda
})
