import React from 'react';
import './Coffee.css';
import '../Css/menu.css';
import '../Css/galeria.css';
import '../Css/ubicacion.css';
import '../Css/footer.css';
import '../Scroll/scroll';

//Componente mapa
import Mapa from '../Mapa/Mapa';

function Coffee() {
	return (
		<div className="Coffee">
			<header>
				<div className="contenedor">
					<nav className="contenedor-menu">
						<ul>
							<li>
								<a href="#acerca-de" id="btn-acerca-de">
									Acerca de
								</a>
							</li>
							<li>
								<a href="#menu" id="btn-menu">
									Menú
								</a>
							</li>
							<li>
								<a href="#galeria" id="btn-galeria">
									Galería
								</a>
							</li>
							<li>
								<a href="#ubicacion" id="btn-ubicacion">
									Ubicación
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className="titulo-textos">
					<h1 className="titulo-nombre">
						ALL <span>SAINTS CAFE</span>
					</h1>
					<h3>Lorem ipsum doluor sith amet, consectetur adipisicing elit.</h3>
				</div>
			</header>

			<section className="main">
				<section className="acerca-de" id="acerca-de">
					<div className="acerca-de__contenido">
						<div className="acerca-de__img">
							<img
								className="aceca-de__foto"
								src="/public/img/acerca-de2.jpg"
								alt=""
							/>
						</div>
						<article className="acerca-de__textos">
							<h3>Acerca de</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipising elit. Tnetur
								nesciunt quaerat ex numquam maxime.
							</p>
							<p>
								Lorem ipsum dolor sit amet consecretur ad lit ged. Blanditiis
								qubudam ali dolore beatae excepturi os optio fuga co suspit ex
								Moletiae unde ipsum hus fugiat mima ab, porro lusto.
							</p>
						</article>
					</div>
				</section>

				<section className="menu" id="menu">
					<div className="menu__contenido">
						<h3 className="titulo" id="platillos">
							Menú
						</h3>
						<div className="menu__contenido-1">
							<div className="menu__contenido-2">
								<article>
									<p className="categoria">De Comer</p>
									<div className="platillo">
										<p className="nombre">Saguite esquisitue cinaqus</p>
										<p className="precio">$22</p>
										<p className="descripcion">
											Kommodi accusamus sunt dolorem aut, saepe minima nesciunt
											dignissimos ansas.
										</p>
									</div>
									<div className="platillo">
										<p className="nombre">Lorem esquisitue arsumes</p>
										<p className="precio">$28</p>
										<p className="descripcion">
											Pommodi accusamus sunt dolorem aut, saepe minima nesciunt
											dignissimos ausan.
										</p>
									</div>
									<div className="platillo">
										<p className="nombre">Riquedht esquistue uterom</p>
										<p className="precio">$35</p>
										<p className="descripcion">
											Sommodi accusamus sunt dolorem aut, saepe minima nesciunt
											dignissimos ansas.
										</p>
									</div>
									<div className="platillo">
										<p className="nombre">Delidus esquisitue arsum</p>
										<p className="precio">$44</p>
										<p className="descripcion">
											Commodi accusamus sunt dolorem aut, saepe minima nesciunt
											dignissimos ansas.
										</p>
									</div>
								</article>

								<article>
									<p className="categoria">De Tomar</p>
									<div className="platillo">
										<p className="nombre">Refrest juren hieloth</p>
										<p className="precio">$5</p>
										<p className="descripcion">
											Vommodi accusamus sunt dolorem aut, saepe minima nesciunt
											dignissimos alusant.
										</p>
									</div>
									<div className="platillo">
										<p className="nombre">Lorem helarhs nembfihs</p>
										<p className="precio">$7</p>
										<p className="descripcion">
											Bommodi accusamus sunt dolorem aut, saepe minima nesciunt
											dignissimos bos ansas.
										</p>
									</div>
									<div className="platillo">
										<p className="nombre">Refrest juren hieloth</p>
										<p className="precio">$9</p>
										<p className="descripcion">
											Wommodi accusamus sunt dolorem aut, saepe minima nesciunt
											dignissimos ausant.
										</p>
									</div>
									<div className="platillo">
										<p className="nombre">Sodakf juren hieloth</p>
										<p className="precio">$12</p>
										<p className="descripcion">
											Mommodi accusamus sunt dolorem aut, saepe minima nesciunt
											dignissimos ansas.
										</p>
									</div>
								</article>
							</div>
						</div>
					</div>
				</section>

				<section className="galeria" id="galeria">
					<div className="galeria-fotos">
						<img className="galeria-img" src="/public/img/1.jpg" alt="" />
						<img className="galeria-img" src="/public/img/2.jpg" alt="" />
						<img className="galeria-img" src="/public/img/3.jpg" alt="" />
						<img className="galeria-img" src="/public/img/4.jpg" alt="" />
						<img className="galeria-img" src="/public/img/5.jpg" alt="" />
						<img className="galeria-img" src="/public/img/6.jpg" alt="" />
						<img className="galeria-img" src="/public/img/7.jpg" alt="" />
						<img className="galeria-img" src="/public/img/8.jpg" alt="" />
					</div>
				</section>

				<section className="ubicacion" id="ubicacion">
					<h3 className="ubicacion-titulo">Ubicación</h3>
					<div className="ubicacion-contenido">
						<div className="direccion">
							<p className="calle">
								2764 Pringwe letdus <br /> hutecbut, CA 97214
							</p>
							<p className="telefono">(578) 459-5834</p>
							<p className="correo">correo@tucorreo.com</p>
						</div>

						<div className="horarios">
							<h4>Horarios</h4>
							<div className="horario-semana">
								<p className="entre-semana">
									Lunes a Viernes <br /> 8:00am - 9:00pm
								</p>
								<p className="fin-semana">
									Sabado y Domingo <br /> 11:00am - 9:00pm
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="Mapa">
					<Mapa />
				</section>
			</section>

			<footer>
				<div className="footer-contenedor">
					<div className="creador">
						<p className="p1">- CREADOR -</p>
						<p className="p2">David Trinidad</p>
					</div>
					<div className="copyright">
						<p>All Saints Cafe @ 2023</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Coffee;
