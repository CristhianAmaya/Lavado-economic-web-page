document.addEventListener('DOMContentLoaded', () => {
    // =========================================================
    // ⏪ CARDS FLOTANTES DE SERVICIOS
    // =========================================================
    function infoFloatingCards(id) {
        const info = {
            card_1: `
                <ul>
                    <li>Se recomienda aspirado semanal para evitar la acumulación de partículas
                        abrasivas.</li>
                    <li>Rotar el tapete cada 6 meses para un desgaste uniforme de las fibras.</li>
                </ul>
            `,
            card_2: `
                <ul>
                    <li>Realizar limpieza profesional cada 12 meses para prolongar la vida útil del
                        material.</li>
                    <li>Evitar el uso de químicos corrosivos que degradan los filtros UV de las
                        telas.</li>
                </ul>
            `,
            card_3: `
                <ul>
                    <li>Lavado preventivo anual para mantener la higiene del hogar.</li>
                    <li>Si tienes mascotas o niños, se sugiere mantenimiento cada 6 meses.</li>
                </ul>
            `,
            card_4: `
                <ul>
                    <li>En entornos empresariales se recomienda el lavado técnico cada 5 meses.</li>
                    <li>Para uso en Home Office, un mantenimiento anual es ideal.</li>
                </ul>
            `,
            card_5: `
                <ul>
                    <li>Lavar profundamente antes y después de temporadas de alta exposición al sol
                        o lluvia.</li>
                    <li>Se recomienda el uso de cobertores para minimizar el impacto del ambiente.
                    </li>
                </ul>
            `,
            card_6: `
                <ul>
                    <li>Realizar mantenimiento cada 6 meses debido al alto tráfico y exposición a
                        residuos.</li>
                    <li>No frotar manchas frescas; presionar con un paño seco y contactar al
                        experto.</li>
                </ul>
            `,
            card_7: `
                <ul>
                    <li>Recomendado cada 5 meses para prevenir afecciones respiratorias y alergias
                        cutáneas.</li>
                    <li>En sector hotelero, se sugiere un ciclo de lavado mensual por normativa de
                        higiene.</li>
                </ul>
            `,
            card_8: `
                <ul>
                    <li>Realizar limpieza interior profunda cada 6 meses para evitar el desgaste
                        prematuro.</li>
                    <li>La hidratación de cueros es vital trimestralmente para prevenir grietas por
                        calor.</li>
                </ul>
            `,
            card_9: `
                <ul>
                    <li>En jardines infantiles y centros de recreación, lavar cada 3 meses
                        obligatoriamente.</li>
                    <li>Verificar siempre el secado total para prevenir la formación de hongos
                        internos.</li>
                </ul>
            `,
            card_10: `
                <ul>
                    <li>Mantenimiento profundo profesional mensual para evitar la propagación de
                        bacterias.</li>
                    <li>Complementar con desinfección superficial diaria tras cada jornada de
                        entrenamiento.</li>
                </ul>
            `,
            card_11: `
                <ul>
                    <li>Lavado profesional trimestral para evitar que las manchas de productos
                        químicos se fijen.</li>
                    <li>Protección de zonas de alto roce con productos que repelen líquidos.</li>
                </ul>
            `,
            card_12: `
                <ul>
                    <li>Programar jornadas de limpieza profunda mensual para áreas de alto tráfico.
                    </li>
                    <li>Priorizar la desinfección de ascensores, lobbies y salones sociales.</li>
                </ul>
            `
        };
        return info[id];
    }

    function setupFloatingCards() {
        // Cuando el mouse pase por encima del enlace "Saber más...", mostrar la info flotante
        const actionLinks = document.querySelectorAll('.text-action');
        const infoBox = document.querySelector('.info-action');
        actionLinks.forEach(link => {
            link.addEventListener('mouseenter', (event) => {
                // Accedemos a la card del enlace actual
                const card = link.closest('.service-card');
                if (card.classList.contains('active')) {
                    // Primero obtener el ID de la tarjeta correspondiente
                    const cardId = event.target.id;
                    // Luego obtener el contenido informativo haciendo uso del id
                    const infoContent = infoFloatingCards(cardId);
                    // Agregamos o actualizamos el contenido de la caja de información flotante
                    infoBox.innerHTML = infoContent;
                    // Agregamos la clase visible para mostrar la caja
                    infoBox.classList.add('visible');
                    // Posicionamos la caja cerca del enlace
                    const rect = event.target.getBoundingClientRect();
                    infoBox.style.top = `${rect.bottom + window.scrollY + 5}px`;
                    infoBox.style.left = `${rect.left + window.scrollX}px`;
                }
            });
            link.addEventListener('mouseleave', () => {
                // Removemos la clase visible para ocultar la caja
                infoBox.classList.remove('visible');
            });
        });
    }

    setupFloatingCards();
});