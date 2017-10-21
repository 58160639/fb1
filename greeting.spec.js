function Greeting(realnameService){
    this.realnameService = realnameService
    
    this.echo = (nickname) =>{
        var firstname = realnameService(nickname)
        return `Hello $ {firstname}!`
    }
}
function BuuAuthen(facebooAuthenService){
    this.authenService = facebooAuthenService
    
    this.signIn = (username,password) =>{
        var aaccount = this.authService(username,password)

        return{
            name: account.name,
            email: account.email,
            token:'0000000000'
        }
    }
}

test('Greeting' ,() =>{
      //arrange 
    const mockRealnameService = jest.fn()
    .mockReturnValue('Weera')
    
      var app = new Greeting(mockRealnameService)
    
     //act
      var nickname = 'ball'
      var result = app.echo(nickname)
     
      //Assert
      expect(mockRealnameService).toHaveBeenCalled()
      expect(mockRealnameService).toHaveBeenCalledwith(nickname)
      expect(result).toBe('Hello Weera!')
})
 
 
 test('FacebookAuthen',() =>{
     const facebookAuthen = jest.fn()
        .mockReturnValue({ 
            name: 'Sirirat', 
            email: 'teeneungeiei@hotmail.com',
            facebookId: '12345678'
 
        })
    var app = new BuuAuthen(mockReturnFacebookAuthen)

     //Act 
    
     var username = '0626942458'
     var password = '12345678'
     var result = app.singnIn(username,password)

     //Assert
    expect(mockRealnameService).toHaveBeenCalled()
    expect(mockRealnameService).toHaveBeenCalledwith(nicknamusername,password)
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('email')
    expect(result).toHaveProperty('token')
    expect(result.name).toBe('Sirirat')
    expect(result.email).toBe('teeneungeiei@hotmail.com')
    expect(result).toHaveLenght(10)
})