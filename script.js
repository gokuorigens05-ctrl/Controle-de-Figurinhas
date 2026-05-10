// CONFIGURAÇÕES DE NOMES CORRIGIDAS (Mantido igual)
const nomesBrasil = { 2: "Alisson", 3: "Bento", 4: "Marquinhos", 5: "Éder Militão", 6: "Gabriel Magalhães", 7: "Danilo", 8: "Wesley", 9: "Lucas Paquetá", 10: "Casemiro", 11: "Bruno Guimarães", 12: "Luiz Henrique", 14: "Vinícius Júnior", 15: "Rodrygo", 16: "João Pedro", 17: "Matheus Cunha", 18: "Gabriel Martinelli", 19: "Raphinha", 20: "Estêvão" };
const nomesMexico = { 2: "Luis Malagón", 3: "Johan Vásquez", 4: "Jorge Sánchez", 5: "César Montes", 6: "Jesús Gallardo", 7: "Israel Reves", 8: "Diego Lainez", 9: "Carlos Rodríguez", 10: "Edson Álvarez", 11: "Orbelín Pineda", 12: "Marcel Ruiz", 14: "Érick Sánchez", 15: "Hirving Lozano", 16: "Santiago Giménez", 17: "Raúl Jiménez", 18: "Alexis Vega", 19: "Roberto Alvarado", 20: "César Huerta" };
const nomesArgentina = { 2: "Emiliano Martínez", 3: "Nahuel Molina", 4: "Cristian Romero", 5: "Nicolás Otamendi", 6: "Nicolás Tagliafico", 7: "Leonardo Balerdi", 8: "Enzo Fernández", 9: "Alexis Mac Allister", 10: "Rodrigo De Paul", 11: "Exequiel Palacios", 12: "Leandro Paredes", 14: "Nico Paz", 15: "Franco Mastantuono", 16: "Nico González", 17: "Lionel Messi", 18: "Lautaro Martínez", 19: "Julián Alvarez", 20: "Giuliano Simeone" };
const nomesPortugal = { 2: "Diogo Costa", 3: "José Sá", 4: "Rúben Dias", 5: "João Cancelo", 6: "Diogo Dalot", 7: "Nuno Mendes", 8: "Gonçalo Inácio", 9: "Bernardo Silva", 10: "Bruno Fernandes", 11: "Rúben Neves", 12: "Vitinha", 14: "João Neves", 15: "Cristiano Ronaldo", 16: "Francisco Trincão", 17: "João Félix", 18: "Gonçalo Ramos", 19: "Pedro Neto", 20: "Rafael Leão" };
const nomesIraque = { 2: "Jalal Hassan", 3: "Rebin Sulaka", 4: "Hussein Ali", 5: "Akam Hashem", 6: "Merchas Doski", 7: "Zaid Tahseen", 8: "Manaf Younis", 9: "Zidane Iqbal", 10: "Amir Al-Ammari", 11: "Ibrahim Bayesh", 12: "Ali Jasim", 14: "Youssef Amyn", 15: "Aimar Sher", 16: "Marko Farji", 17: "Osama Rashid", 18: "Ali Al-Hamadi", 19: "Aymen Hussein", 20: "Mohanad Ali" };
const nomesBelgica = { 2: "Thibaut Courtois", 3: "Arthur Theate", 4: "Timothy Castagne", 5: "Zeno Debast", 6: "Brandon Mechele", 7: "Maxim De Cuyper", 8: "Thomas Meunier", 9: "Youri Tielemans", 10: "Amadou Onana", 11: "Nicolas Raskin", 12: "Alexis Saelemaekers", 14: "Hans Vanaken", 15: "Kevin De Bruyne", 16: "Jérémy Doku", 17: "Charles De Ketelaere", 18: "Leandro Trossard", 19: "Loís Openda", 20: "Romelu Lukaku" };
const nomesEspanha = { 2: "Unai Simón", 3: "Robin Le Normand", 4: "Aymeric Laporte", 5: "Dean Huijsen", 6: "Pedro Porro", 7: "Dani Carvajal", 8: "Marc Cucurella", 9: "Martín Zubimendi", 10: "Rodri", 11: "Pedri", 12: "Fabián Ruiz", 14: "Mikel Merino", 15: "Lamine Yamal", 16: "Dani Olmo", 17: "Nico Williams", 18: "Ferran Torres", 19: "Álvaro Morata", 20: "Mikel Oyarzabal" };
const nomesCocaCola = { 1: "Lamine Yamal", 2: "Joshua Kimmich", 3: "Harry Kane", 4: "Santiago Giménez", 5: "Joško Gvardiol", 6: "Federico Valverde", 7: "Jefferson Lerma", 8: "Enner Valencia", 9: "Gabriel Magalhães", 10: "Virgil Van Dijk", 11: "Alphonso Davies", 12: "Emilíano Martinez", 13: "Raúl Jiménez", 14: "Lautaro Martinez" };
const nomesFWC = { 0: "Logo da Panini", 1: "Emblema Oficial 1", 2: "Emblema Oficial 2", 3: "Mascotes Oficiais", 4: "Slogan Oficial", 5: "Bola Oficial", 6: "Emblema Canadá", 7: "Emblema México", 8: "Emblema EUA", 9: "Itália de 1934", 10: "Uruguai de 1950", 11: "Alemanha de 1954", 12: "Brasil de 1962", 13: "Alemanha de 1974", 14: "Argentina de 1986", 15: "Brasil de 1994", 16: "Brasil de 2002", 17: "Itália de 2006", 18: "Alemanha de 2014", 19: "Argentina de 2022" };

const coresSelecoes = {
    "BRA": "#FFDF00", "ARG": "#74ACDF", "FRA": "#002395", "POR": "#E42518", 
    "NED": "#FF4F00", "GER": "#111111", "ESP": "#C60B1E", "BEL": "#EF3340", 
    "MEX": "#006847", "ITA": "#004BB3", "USA": "#002868", "CC": "#FE001A", 
    "IRQ": "#007A3D", "URU": "#0081C8"
};

const dadosGrupos = {
    "GRUPO A": [{n:"México", s:"MEX"}, {n:"África do Sul", s:"RSA"}, {n:"Coreia do Sul", s:"KOR"}, {n:"República Tcheca", s:"CZE"}],
    "GRUPO B": [{n:"Canadá", s:"CAN"}, {n:"Bósnia", s:"BIH"}, {n:"Catar", s:"QAT"}, {n:"Suíça", s:"SUI"}],
    "GRUPO C": [{n:"Brasil", s:"BRA"}, {n:"Marrocos", s:"MAR"}, {n:"Haiti", s:"HAI"}, {n:"Escócia", s:"SCO"}],
    "GRUPO D": [{n:"Estados Unidos", s:"USA"}, {n:"Paraguai", s:"PAR"}, {n:"Austrália", s:"AUS"}, {n:"Turquia", s:"TUR"}],
    "GRUPO E": [{n:"Alemanha", s:"GER"}, {n:"Curaçao", s:"CUW"}, {n:"Costa do Marfim", s:"CIV"}, {n:"Equador", s:"ECU"}],
    "GRUPO F": [{n:"Holanda", s:"NED"}, {n:"Japão", s:"JAP"}, {n:"Suécia", s:"SWE"}, {n:"Tunísia", s:"TUN"}],
    "GRUPO G": [{n:"Bélgica", s:"BEL"}, {n:"Egito", s:"EGY"}, {n:"Irã", s:"IRN"}, {n:"Nova Zelândia", s:"NZL"}],
    "GRUPO H": [{n:"Espanha", s:"ESP"}, {n:"Cabo Verde", s:"CPV"}, {n:"Arábia Saudita", s:"KSA"}, {n:"Uruguai", s:"URU"}],
    "GRUPO I": [{n:"França", s:"FRA"}, {n:"Senegal", s:"SEN"}, {n:"Iraque", s:"IRQ"}, {n:"Noruega", s:"NOR"}],
    "GRUPO J": [{n:"Argentina", s:"ARG"}, {n:"Argélia", s:"ALG"}, {n:"Áustria", s:"AUT"}, {n:"Jordânia", s:"JOR"}],
    "GRUPO K": [{n:"Portugal", s:"POR"}, {n:"RD Congo", s:"COD"}, {n:"Uzbequistão", s:"UZB"}, {n:"Colômbia", s:"COL"}],
    "GRUPO L": [{n:"Inglaterra", s:"ENG"}, {n:"Croácia", s:"CRO"}, {n:"Gana", s:"GHA"}, {n:"Panamá", s:"PAN"}]
};

const mapBandeiras = {"BRA":"br", "MEX":"mx", "FRA":"fr", "ARG":"ar", "GER":"de", "USA":"us", "POR":"pt", "ENG":"gb", "NED":"nl", "BEL":"be", "ESP":"es", "CAN":"ca", "RSA":"za", "KOR":"kr", "CZE":"cz", "BIH":"ba", "QAT":"qa", "SUI":"ch", "MAR":"ma", "HAI":"ht", "SCO":"gb-sct", "PAR":"py", "AUS":"au", "TUR":"tr", "CUW":"cw", "CIV":"ci", "ECU":"ec", "JAP":"jp", "SWE":"se", "TUN":"tn", "EGY":"eg", "IRN":"ir", "NZL":"nz", "CPV":"cv", "KSA":"sa", "URU":"uy", "SEN":"sn", "IRQ":"iq", "NOR":"no", "ALG":"dz", "AUT":"at", "JOR":"jo", "COD":"cd", "UZB":"uz", "COL":"co", "CRO":"hr", "GHA":"gh", "PAN":"pa"};
const playersExtra = ["Cristiano Ronaldo", "Lionel Messi", "Florian Wirtz", "Lamine Yamal", "Achraf Hakimi", "Kylian Mbappé", "Erling Haaland", "Cody Gakpo", "Jérémy Doku", "Christian Pulisic", "Vinícius Júnior", "Luka Modric", "Federico Valverde", "Heughmin Son", "Mohamed Salah", "Moisés Caicedo", "Raúl Jiménez", "Alphonso Davies", "Luis Diaz", "Jude Bellingham"];

const TOTAL_FIGURINHAS = 994;

function ajustarCorTexto(color) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16), g = parseInt(hex.substr(2, 2), 16), b = parseInt(hex.substr(4, 2), 16);
    return ((0.299 * r + 0.587 * g + 0.114 * b) / 255) > 0.6 ? '#000000' : '#ffffff';
}

function criarFigurinha(sigla, num, ehSelecao, nomePais = "") {
    const f = document.createElement('div');
    f.className = 'figurinha';
    if (coresSelecoes[sigla]) {
        const corFundo = coresSelecoes[sigla];
        f.style.setProperty('--bg-colada', corFundo);
        f.style.setProperty('--txt-colada', ajustarCorTexto(corFundo));
    }
    const displayNum = num === 0 ? "00" : num;
    let nomePlayer = "";
    if (sigla === "BRA") nomePlayer = nomesBrasil[num] || "";
    else if (sigla === "MEX") nomePlayer = nomesMexico[num] || "";
    else if (sigla === "ARG") nomePlayer = nomesArgentina[num] || "";
    else if (sigla === "POR") nomePlayer = nomesPortugal[num] || "";
    else if (sigla === "IRQ") nomePlayer = nomesIraque[num] || "";
    else if (sigla === "BEL") nomePlayer = nomesBelgica[num] || "";
    else if (sigla === "ESP") nomePlayer = nomesEspanha[num] || "";
    else if (sigla === "CC") nomePlayer = nomesCocaCola[num] || "";
    else if (sigla === "FWC") nomePlayer = nomesFWC[num] || "";

    let labelNum = (sigla === "FWC" && num === 0) ? "00" : `${sigla} ${displayNum}`;
    let conteudo = `<span class="num-sigla">${labelNum}</span>`;
    if(nomePlayer) conteudo += `<div class="player-name">${nomePlayer}</div>`;
    if(ehSelecao) {
        if(num === 1) { f.classList.add('especial-prateada'); conteudo += `<div class="desc-especial">Escudo</div>`; }
        if(num === 13) { f.classList.add('especial-perfilado'); conteudo += `<div class="desc-especial">Perfilada</div>`; }
    }
    f.setAttribute('data-search', `${labelNum} ${nomePlayer} ${nomePais}`.toUpperCase());
    f.innerHTML = `${conteudo}<div class="badge-repetida">0</div>`;
    return f;
}

document.addEventListener('DOMContentLoaded', () => {
    const album = document.getElementById('album-display');
    renderSecaoFWC(album, "INTRODUÇÃO", 0, 8);
    Object.keys(dadosGrupos).forEach(grupo => {
        const divGrupo = document.createElement('div');
        divGrupo.className = 'grupo-container';
        divGrupo.innerHTML = `<h2 class="grupo-title">${grupo}</h2>`;
        dadosGrupos[grupo].forEach(time => {
            const timeSec = document.createElement('div');
            timeSec.className = 'time-section secao-com-stats';
            timeSec.setAttribute('data-nome-selecao', time.n.toUpperCase());
            const bandeira = mapBandeiras[time.s] || 'un';
            timeSec.innerHTML = `<div class="time-header"><img src="https://flagcdn.com/w80/${bandeira}.png" class="bandeira"><h3>${time.n}</h3></div><div class="section-stats-bar"><div class="stats-text"><span class="txt-coladas">0</span>/20</div><div class="mini-bar-bg"><div class="mini-bar-fill"></div></div><div class="stats-text">Repetidas: <b class="txt-reps">0</b></div></div><div class="grid-figurinhas"></div>`;
            for(let i=1; i<=20; i++) timeSec.querySelector('.grid-figurinhas').appendChild(criarFigurinha(time.s, i, true, time.n));
            divGrupo.appendChild(timeSec);
        });
        album.appendChild(divGrupo);
    });
    renderSecaoFWC(album, "FIFA WORLD CUP HISTORY", 9, 19);
    renderSecaoSimples(album, "COCA-COLA SERIES", "CC", 1, 14);
    renderLegends(album);
    setupLogic();
});

function renderSecaoFWC(container, titulo, inicio, fim) {
    const total = (fim - inicio) + 1;
    const sec = document.createElement('div');
    sec.className = 'grupo-container secao-com-stats';
    sec.innerHTML = `<h2 class="grupo-title">${titulo}</h2><div class="section-stats-bar"><div class="stats-text"><span class="txt-coladas">0</span>/${total}</div><div class="mini-bar-bg"><div class="mini-bar-fill"></div></div><div class="stats-text">Repetidas: <b class="txt-reps">0</b></div></div><div class="grid-figurinhas"></div>`;
    for(let i=inicio; i<=fim; i++) sec.querySelector('.grid-figurinhas').appendChild(criarFigurinha("FWC", i, false));
    container.appendChild(sec);
}

function renderSecaoSimples(container, titulo, sigla, inicio, fim) {
    const total = (fim - inicio) + 1;
    const sec = document.createElement('div');
    sec.className = 'grupo-container secao-com-stats';
    sec.innerHTML = `<h2 class="grupo-title">${titulo}</h2><div class="section-stats-bar"><div class="stats-text"><span class="txt-coladas">0</span>/${total}</div><div class="mini-bar-bg"><div class="mini-bar-fill"></div></div><div class="stats-text">Repetidas: <b class="txt-reps">0</b></div></div><div class="grid-figurinhas"></div>`;
    for(let i=inicio; i<=fim; i++) sec.querySelector('.grid-figurinhas').appendChild(criarFigurinha(sigla, i, false));
    container.appendChild(sec);
}

function renderLegends(container) {
    const sec = document.createElement('div');
    sec.className = 'grupo-container';
    sec.innerHTML = `<h2 class="grupo-title">EXTRA STICKERS (LEGENDS)</h2>`;
    playersExtra.forEach(p => {
        const row = document.createElement('div');
        row.className = 'legend-row';
        row.setAttribute('data-search', p.toUpperCase());
        row.innerHTML = `<span>${p}</span><div class="legend-boxes"><div class="box-extra regular">R</div><div class="box-extra bronze">B</div><div class="box-extra prata">P</div><div class="box-extra ouro">O</div></div>`;
        sec.appendChild(row);
    });
    container.appendChild(sec);
}

function setupLogic() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.querySelectorAll('.figurinha').forEach(fig => {
        fig.addEventListener('mousedown', e => {
            const badge = fig.querySelector('.badge-repetida');
            let reps = parseInt(badge.innerText);
            if(e.button === 0) {
                if(!fig.classList.contains('colada')) fig.classList.add('colada');
                else { reps++; badge.innerText = reps; badge.style.display = 'flex'; }
            } else if(e.button === 2) {
                if(reps > 0) { reps--; badge.innerText = reps; if(reps === 0) badge.style.display = 'none'; }
                else fig.classList.remove('colada');
            }
            atualizarStats();
        });
    });
    document.querySelectorAll('.box-extra').forEach(box => {
        box.onclick = () => { box.classList.toggle('active'); atualizarStats(); };
    });
    const busca = document.getElementById('inputBusca');
    busca.oninput = () => {
        const val = busca.value.trim().toUpperCase();
        document.querySelectorAll('.figurinha, .legend-row').forEach(item => {
            item.style.display = (val === "" || (item.getAttribute('data-search') || "").includes(val)) ? '' : 'none';
        });
        document.querySelectorAll('.time-section, .grupo-container').forEach(sec => {
            const temFigVisivel = sec.querySelectorAll('.figurinha:not([style*="display: none"]), .legend-row:not([style*="display: none"])').length > 0;
            sec.style.display = temFigVisivel ? '' : 'none';
        });
    };
    document.getElementById('btn-tema').onclick = () => document.body.classList.toggle('light-mode');

    // LÓGICA DO BOTÃO RESET ADICIONADA AQUI
    document.getElementById('btn-reset').onclick = () => {
        const confirmar = confirm("⚠️ ATENÇÃO: Você tem certeza que deseja limpar todo o álbum?\n\nEsta ação é irreversível e zerará todo o seu progresso.");
        
        if (confirmar) {
            // Remove a marcação de colada de todas as figurinhas
            document.querySelectorAll('.figurinha').forEach(fig => {
                fig.classList.remove('colada');
                const badge = fig.querySelector('.badge-repetida');
                badge.innerText = "0";
                badge.style.display = 'none';
            });

            // Remove a marcação das Legends
            document.querySelectorAll('.box-extra').forEach(box => {
                box.classList.remove('active');
            });

            // Atualiza os contadores no cabeçalho
            atualizarStats();
            
            // Volta para o topo da página
            window.scrollTo({ top: 0, behavior: 'smooth' });
            alert("Álbum reiniciado com sucesso!");
        }
    };
}

function atualizarStats() {
    const coladasTotal = document.querySelectorAll('.figurinha.colada').length;
    let repetidasTotal = 0;
    document.querySelectorAll('.badge-repetida').forEach(b => { if(b.style.display === 'flex') repetidasTotal += parseInt(b.innerText); });
    const legends = document.querySelectorAll('.box-extra.active').length;
    document.getElementById('qtd-coladas').innerText = coladasTotal;
    document.getElementById('qtd-faltam').innerText = TOTAL_FIGURINHAS - coladasTotal;
    document.getElementById('qtd-repetidas').innerText = repetidasTotal;
    document.getElementById('qtd-legends').innerText = `${legends}/80`;
    const percGeral = ((coladasTotal / TOTAL_FIGURINHAS) * 100).toFixed(1);
    document.getElementById('perc-total').innerText = percGeral + "%";
    document.getElementById('bar-fill').style.width = percGeral + "%";
    document.querySelectorAll('.secao-com-stats').forEach(secao => {
        const coladasNaSecao = secao.querySelectorAll('.figurinha.colada').length;
        const totalNaSecao = secao.querySelectorAll('.figurinha').length;
        let repsNaSecao = 0;
        secao.querySelectorAll('.badge-repetida').forEach(b => { if(b.style.display === 'flex') repsNaSecao += parseInt(b.innerText); });
        secao.querySelector('.txt-coladas').innerText = coladasNaSecao;
        secao.querySelector('.txt-reps').innerText = repsNaSecao;
        secao.querySelector('.mini-bar-fill').style.width = (coladasNaSecao / totalNaSecao) * 100 + "%";
    });
}
