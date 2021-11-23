import styles from "./donacionSangre.module.css";

const donacionSangre = () => {
  return <main>
            <section className={styles.encabezado}>
              <section className={styles.textoheader}>
                <button className={styles.boton}>¡Quiero donar!</button>
              </section>
            </section>
            
            <section className={styles.contenedor_requisitos}>
                <h2 className={styles.titulo}>Requisitos para ser donante</h2>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZHTFvDoOwgJ8q4NaH-MZqTew9yGhUoM5rg&usqp=CAU" alt=""/>
                        <div className={styles.texto_card}>
                            <p>Ser mayor de 18</p>
                        </div>
                    </div>
                    <div className={styles.card}  >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZHTFvDoOwgJ8q4NaH-MZqTew9yGhUoM5rg&usqp=CAU" alt=""/>
                        <div className={styles.texto_card}>
                            <p>...</p>
                        </div>
                    </div>
                    <div className={styles.card}  >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZHTFvDoOwgJ8q4NaH-MZqTew9yGhUoM5rg&usqp=CAU" alt=""/>
                        <div className={styles.texto_card}>
                            <p>Pesar más de ...</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZHTFvDoOwgJ8q4NaH-MZqTew9yGhUoM5rg&usqp=CAU" alt=""/>
                        <div className={styles.texto_card}>
                            <p>...</p>
                        </div>
                    </div>
                    <div className={styles.card}  >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZHTFvDoOwgJ8q4NaH-MZqTew9yGhUoM5rg&usqp=CAU" alt=""/>
                        <div className={styles.texto_card}>
                            <p>...</p>
                        </div>
                    </div>
                    <div className={styles.card}  >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZHTFvDoOwgJ8q4NaH-MZqTew9yGhUoM5rg&usqp=CAU" alt=""/>
                        <div className={styles.texto_card}>
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.difusion}>
                <div className={styles.contenedor}>
                    <h2 className={styles.titulo} >Ayudanos a difundir</h2>
                </div>
            </section>
        </main>
  ;
};

export default donacionSangre;

