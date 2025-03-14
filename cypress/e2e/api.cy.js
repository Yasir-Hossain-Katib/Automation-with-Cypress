
  describe('Api test', () => {
    it('List Users', () => {
      
  
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2', 
        
      }).then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.be.an('object'); 
       
      });
    });


    it('Single User', () => {
  
      cy.request('GET','https://reqres.in/api/users/2') 
        
      .then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.be.an('object'); 
        const users = response.body;         
        console.log('List of Users:', users);
      
       
      });
    });

    it('Single User not found', () => {
  
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
          })
        
      .then((response) => {
        expect(response.status).to.eq(404); 
        //expect(response.body).to.be.an('object'); 
       
    });
    });

    it('List Resource', () => {
  
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown',
            failOnStatusCode: false
          })
        
      .then((response) => {
        expect(response.status).to.eq(200); 
        console.log('Response:', response);
        console.log('Response Body:', response.body);
        
        //expect(response.body).to.be.an('object'); 
       
    });
    });

    it('List Resource', () => {
  
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown',
            failOnStatusCode: false
          })
        
      .then((response) => {
        expect(response.status).to.eq(200); 
        console.log('Response:', response);
        console.log('Response Body:', response.body);
        
        //expect(response.body).to.be.an('object'); 
       
    });
    });

    it('Single Resource', () => {
  
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/2',
            failOnStatusCode: false
          })
        
      .then((response) => {
        expect(response.status).to.eq(200); 
        console.log('Response:', response);
        //console.log('Response Body:', response.body);
        
        //expect(response.body).to.be.an('object'); 
       
    });
    });

    it('Single Resource Not Found', () => {
  
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23',
            failOnStatusCode: false
          })
        
      .then((response) => {
        expect(response.status).to.eq(404); 
        console.log('Response:', response);
        //console.log('Response Body:', response.body);
        
        //expect(response.body).to.be.an('object'); 
       
    });
    });

    it('Create', () => {
        const user={
            "name": "morpheus",
            "job": "leader"
        }
  
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            failOnStatusCode: false,
            body: user
          })
        
      .then((response) => {
        expect(response.status).to.eq(201); 
        console.log('Response:', response);
        //console.log('Response Body:', response.body);
        
        //expect(response.body).to.be.an('object'); 
       
    });
    });


    it('Update', () => {
        const user={
            "name": "morpheus",
            "job": "zion resident"
        }
  
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false,
            body: user
          })
        
      .then((response) => {
        expect(response.status).to.eq(200); 
        cy.log('Response:', response.body);
        //console.log('Response Body:', response.body);
        
        //expect(response.body).to.be.an('object'); 
       
    });
    });

    it('Partial Update', () => {
        const user={
            "name": "morpheus",
            "job": "zion resident"
        }
  
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false,
            body: user
          })
        
      .then((response) => {
        expect(response.status).to.eq(200); 
        cy.log('Response:', response.body);
        //console.log('Response Body:', response.body);
        
        //expect(response.body).to.be.an('object'); 
       
    });
    });

    it('Delete', () => {
        
  
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false,
            
          })
        
      .then((response) => {
        expect(response.status).to.eq(200); 
        cy.log('Response:', response.body);
        //console.log('Response Body:', response.body);
        
        //expect(response.body).to.be.an('object'); 
       
    });
    });


    it('Register - Successful', () => {
      const user={
          "email": "eve.holt@reqres.in",
          "password": "pistol"
      }

      cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/register',
          failOnStatusCode: false,
          body: user
        })
      
    .then((response) => {
      expect(response.status).to.eq(200); 
      cy.log('Response:', response.body);
      //console.log('Response Body:', response.body);
      
      //expect(response.body).to.be.an('object'); 
     
  });
  });


    it('Register - Unsuccessful', () => {
      const user={
          "email": "eve.holt@reqres.in",
          
      }

      cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/register',
          failOnStatusCode: false,
          body: user
        })
      
    .then((response) => {
      expect(response.status).to.eq(400); 
      cy.log('Response:', response.body);
      //console.log('Response Body:', response.body);
      
      //expect(response.body).to.be.an('object'); 
     
  });
  });

    it('Login - Successful', () => {
      const user={
          "email": "eve.holt@reqres.in",
          "password": "cityslicka"
          
      }

      cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/login',
          failOnStatusCode: false,
          body: user
        })
      
    .then((response) => {
      expect(response.status).to.eq(200); 
      cy.log('Response:', response.body);
      //console.log('Response Body:', response.body);
      
      //expect(response.body).to.be.an('object'); 
     
  });
  });


    it('Login - Unsuccessful', () => {
      const user={
          "email": "eve.holt@reqres.in",
         
          
      }

      cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/login',
          failOnStatusCode: false,
          body: user
        })
      
    .then((response) => {
      expect(response.status).to.eq(400); 
      cy.log('Response:', response.body);
      //console.log('Response Body:', response.body);
      
      //expect(response.body).to.be.an('object'); 
     
  });
  });


    















});













