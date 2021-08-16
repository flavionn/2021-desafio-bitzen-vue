const usuarios = [
	{
		email: 'teste@teste.com',
		password: '123456'
	},
	{
		email: 'flavio@teste.com',
		password: '140203'
	}
]
export default {
	transacaoLogar(dados) {
		return new Promise((resolve, reject) => {

			let filteredUsers = usuarios.filter(usuario => {
				return usuario.email === dados.email && usuario.password === dados.password
			})

			if(filteredUsers.length) {
				let usuario = filteredUsers[0]

				let responseJson = {
					email: usuario.email,
					password: usuario.password,
					token: 'algum-dado-token'
				}

				resolve(
					{
						ok: true,
						text: responseJson
					}
				)
			}
			else {
				reject('Email ou senha incorretos')
			}

			return
		})
	}
}
