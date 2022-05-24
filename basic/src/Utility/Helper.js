export class Helper {
	static sendHttpRequest(method, url, data) {
		const promise = new Promise((reslove, reject) => {
			const xhr = new XMLHttpRequest()
			xhr.open(method, url)
			xhr.setRequestHeader('Content-Type', 'application/json')
			xhr.onload = function () {
				// console.log(xhr.response);
				if (xhr.status >= 200 && xhr.status < 300) {
					reslove(xhr.response)
				} else {
					reject(new Error('Logic error'))
				}
			}
			xhr.onerror = function() { 
				reject(new Error('Something went wrong!'))
			}
			xhr.send(JSON.stringify(data))
		})
		return promise
	}

	static getPosts() {
		Helper.sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(data => {
			const listData = JSON.parse(data)
			Helper.bindDataToTable('table', listData)
		})
	}

	static bindDataToTable(idTable, listData) {
		const table = document.querySelector(`#${idTable}`)
		const tbody = table.querySelector('tbody')
		for (let data of listData) {
			const tr = document.createElement('tr')
			tr.dataset.postId = data.id
			for (let key of ['userId','title','body']) {
				const td = document.createElement('td')
				td.textContent = data[key]
				tr.append(td)
			}
			const td = document.createElement('td')
			td.innerHTML = `
                <button id='btnUpdate'>Update</button>
                <button id='btnDelete'>Delete</button>
            `
			tr.append(td)
			tbody.append(tr)
		}

		tbody.addEventListener('click', event => {
			console.log(event.target)
			if (event.target.id === 'btnUpdate') {
				const postId = event.target.closest('tr').dataset.postId
				Helper.updatePost(postId)
			}
			if (event.target.id === 'btnDelete') {
				const postId = event.target.closest('tr').dataset.postId
				Helper.deletePost(postId)
			}
		})
	}

	static updatePost(postId) {
        // eslint-disable-next-line no-unused-vars
        const tooltip = import('../App/Tooltip');
		console.log('Update: ', postId)
	}

	static deletePost(postId) {
		console.log('Delete: ', postId)
	}
}