describe('Under-a-Tack ImagePage', () => {

    beforeEach(() => {
        cy.intercept("GET", "http://localhost:3001/api/v1/images/:16", {
            "data": [
                {
                    "id": "16",
                    "url": "https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
                    "title": "Last Summer Things Were Greener",
                    "color": ["green", "blue", "brown", "black"],
                    "artist": "John Byam Liston Shaw",
                    "type": "painting"
                    }
            ]
              }) 
        cy.visit('http://localhost:3000/images/:16');
      });

      it('Should be able to visit the page and show the website title"', () => {
        cy.get("div.App")
        .contains("Under-A-Tack")
      });

      it("Should show display title of a specific image", () => {
        cy.get("h2")
        .contains("Last Summer Things Were Greener")
       });

      it("Should show display artist of a specific image", () => {
            cy.get("p")
            .contains("John Byam Liston Shaw")
        });

      it("should show a button for add to cart", () => {
            cy.get("button")
            .contains("add to cart")
        });

  });