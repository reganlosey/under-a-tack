describe('imagePage', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/images' , {
      statusCode: 200,
      body: {
        images: [
          {
            id: 16,
            url: 'https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnzxwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80',
            title: 'Last Summer Things Were Greener',
            color: '["green", "blue", "brown", "black"]',
            artist: 'John Byam Liston Shaw',
            type: 'painting'
          },
          {
            id: 17,
            url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80',
            title: 'Vase of Flowers',
            color: ["multi", "black"],
            artist: 'Jan Davidsz de Heem',
            type: 'painting'
          }
      ] 
    }
  })
    cy.intercept("http://localhost:3001/api/v1/images/:16", {
      "data": [
        {
          id: 16,
          url: "https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
          title: "Last Summer Things Were Greener",
          color: ["green", "blue", "brown", "black"],
          artist: "John Byam Liston Shaw",
          type: "painting"
        }
      ]
    })
    cy.visit('http://localhost:3000/images/:16');
  });

  it('should visit the url that corresponds to clicked image\'s id', () => {
    cy.url().should('eq', 'http://localhost:3000/images/:16')
    
  });

  it('should still render the header after routing', () => {
    cy.get('header')
    .get('h1')
    .contains('under a tack!')
  })

  it('should have a button that links to the base url', () => {
    cy.get('header')
    .get('.button-container')
    .get('a').contains('Home')
    .should('have.attr', 'href').and('include','/')
  })

  it('should have a button that links to the /cart endpoint', () => {
    cy.get('header')
    .get('.button-container')
    .get('a').contains('Cart')
    .should('have.attr', 'href').and('include','/cart')
  })

  it("should display the current image\'s title, artist, color, and type", () => {
    cy.get('.image-page')
    .get('h2')
    .contains("Last Summer Things Were Greener")
    .get('article > :nth-child(2)')
    .contains('Artist: John Byam Liston Shaw')
    .get('article > :nth-child(3)')
    .contains('Color: greenbluebrownblack')
    .get('article > :nth-child(4)')
    .contains('Type: painting')

  });

  it("should have an 'add to cart' button ", () => {
    cy.get('.image-page')
    .get('button')
    .get('article')
    .get('button')
    .contains("add to cart")
  });

  it('should display the current image', () => {
    cy.get('.image-page')
    .get('img')
    .should('have.attr', 'src', 'https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80' )
  })

  // it('should be able to navigate to the /cart endpoint', () => {
  //   cy.get('header')
  //   .get('.button-container')
  //   .get('a').contains('Home')
  //   .should('have.attr', 'href').and('include','/cart')
  //   .click()
  // })
});