/* ============================================================
   SCAN FOR SCHOOLS — SITE DATA
   ------------------------------------------------------------
   This is the ONLY file you need to edit to keep the site
   up to date. Change the values below, save, and commit.
   The website updates itself from what's here.

   Two rules to avoid breaking it:
     1. Keep the quotation marks "" around any text.
     2. Keep the commas exactly where they are.
   ============================================================ */

window.SFS_DATA = {

  /* ----------------------------------------------------------
     MONEY RAISED SO FAR (shown as the big number on the site)
     Just type the dollar amount — no "$" sign, no commas.
     Examples:  1240.80   or   3500   or   0
     (The number below is a sample — replace it with your real total.)
     ---------------------------------------------------------- */
  raisedUSD: 4.30,


  /* ----------------------------------------------------------
     RECEIPTS SCANNED SO FAR (shown as a box in the Impact section)
     Just type the whole number of receipts scanned — no commas.
     ---------------------------------------------------------- */
  receiptsScanned: 16,


  /* ----------------------------------------------------------
     STORES HOSTING A BOX (shown in the "Stores" section)

     Each store is one line inside { }:
        { name: "Store name", area: "Town, State", since: "2026" },

     • name  — the store's name (required)
     • area  — town/city and state (optional)
     • since — the year they joined (optional)

     TO ADD A STORE: copy one whole line, paste it below the
     others, and edit the text. Keep the comma at the end.

     TO REMOVE A STORE: delete its whole line.

     (These three are samples — replace them with real stores.)
     ---------------------------------------------------------- */
  stores: [
    // No stores yet. When one signs up, add a line here like:
    //   { name: "Store name", area: "Town, State", since: "2026" },
  ],

};
