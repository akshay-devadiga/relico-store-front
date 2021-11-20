<template>
  <v-sheet style="margin-top:10%; margin-bottom:10%">
    <v-row class="justify-center">
      <v-col cols="8">
        <v-expansion-panels>
          <v-expansion-panel v-for="(faqItem, i) in faq" :key="i">
            <v-expansion-panel-header class="font-weight-bold">
              {{ faqItem.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ faqItem.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      faq: [
        {
          question: "How are orders placed on TheJerseyStore delivered to me?",
          answer:
            "All orders placed on TheJerseyStore are dispatched through courier service ",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes. Once your order is shipped you will receive an email from Shoprocket with details of who your order was sent with, tracking information and an estimated arrival date. ",
        },
         {
          question: "How can I pay for my order at TheJerseyStore?",
          answer:
            "We support stripe as payment option",
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
