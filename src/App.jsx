import React, { useState, useEffect } from 'react'

import './App.css'
import add from './add.svg'

function App() {
	const [dataImg, setDataImg] = useState([])
	const [selectedData, setSelectedData] = useState([dataImg])
	const [filterValue, setFilterValue] = useState('')
	const [opened, setOpened] = useState('')
	const [show, setShow] = useState(false)
	const imgEndpoint = '//82.142.87.102/extAPI/api/icon/read.php?parent=2'
	const imgUrl = '//eletak.oresi.cz/files/Icons/CZ/'

	useEffect(() => {
		const fetchFolderSluGFromAPI = async () => {
			await fetch(imgEndpoint)
				.then((response) => {
					if (!response.ok) {
						throw new Error(`Chyba ve spojení: status je ${response.status}`)
					}
					return response.json()
				})
				.then((actualData) => {
					setDataImg(actualData)
				})
		}
		fetchFolderSluGFromAPI()
	}, [])

	const inputHandler = (e) => {
		const textInput = e.target.value.toLowerCase()
		setFilterValue(textInput)
	}

	const handleOpen = (event) => {
		setOpened(event.target.dataset.position)
		setShow(true)
		setFilterValue('')
	}

	const handleClick = (event) => {
		const dataImage = event.target.dataset.id
		const dataSrc = event.target.src

		const slot = document.querySelector('[data-position="' + opened + '"]')
		slot.setAttribute('data-icon', dataImage)
		slot.setAttribute('src', dataSrc)

		setShow(false)
		setOpened('')
	}

	const deleteToDefault = (event) => {
		const slot = event.target.previousElementSibling
		slot.setAttribute('data-icon', '')
		slot.setAttribute('src', 'http://localhost:3000/static/media/add.115a53f81814f2fa6d6cb89b42af60e4.svg')
	}

	return (
		<div>
			<header className="App-header">
				<div className="container">
					<div className="row justify-content-center text-center">
						<h4 className="mb-3">Vyberte si ikony</h4>
					</div>
					<div className="row row-cols-auto justify-content-center text-center">
						<div className="col">
							<div className="imageDiv position-relative">
								<img onClick={handleOpen} data-position="1" data-icon="" className="mainImage" src={add} alt="Logo" />
								<div onClick={deleteToDefault} className="delete position-absolute top-100 start-100 translate-middle"></div>
							</div>
						</div>
						<div className="col">
							<div className="imageDiv position-relative">
								<img onClick={handleOpen} data-position="2" data-icon="" className="mainImage" src={add} alt="Logo" />
								<div onClick={deleteToDefault} className="delete position-absolute top-100 start-100 translate-middle"></div>
							</div>
						</div>
						<div className="col">
							<div className="imageDiv position-relative">
								<img onClick={handleOpen} data-position="3" data-icon="" className="mainImage" src={add} alt="Logo" />
								<div onClick={deleteToDefault} className="delete position-absolute top-100 start-100 translate-middle"></div>
							</div>
						</div>
						<div className="col">
							<div className="imageDiv position-relative">
								<img onClick={handleOpen} data-position="4" data-icon="" className="mainImage" src={add} alt="Logo" />
								<div onClick={deleteToDefault} className="delete position-absolute top-100 start-100 translate-middle"></div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<main className="App-main mt-5">
				{show ? (
					<div className="container">
						<span>Vyberte ikonu</span>
						<hr />
						<input
							type="text"
							onChange={inputHandler}
							className="form-control mb-3"
							placeholder="Hledat..."
							aria-label="Hledat"
							aria-describedby="basic-addon1"
						/>
						<select name="selected" defaultValue="" className="form-select mb-3" onChange={(e) => setSelectedData(e.target.value)}>
							<option value="" selected>
								Vše
							</option>
							<option value="energie">Energie</option>
						</select>
						<div className="row gap-3 row-cols-auto justify-content-center text-center">
							{dataImg
								.filter((inner) => inner.name.toLowerCase().includes(selectedData))
								.filter((inner) => inner.name.toLowerCase().includes(filterValue))
								.map((img) => (
									<div key={img.id} className="col-5 col-sm-2 col-md-1 col-lg-1">
										<div className="imgName ">
											<img onClick={handleClick} data-id={img.id} className="imgList" src={imgUrl + img.filename} alt="Logo" />
										</div>
									</div>
								))}
						</div>
					</div>
				) : null}
			</main>
		</div>
	)
}

export default App
