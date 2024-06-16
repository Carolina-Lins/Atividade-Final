const body = document.querySelector(`body`);
body.style.height = `100vh`;
body.style.overflow = `hidden`
body.style.backgroundColor = `gray`;
body.style.display = `flex`;
body.style.justifyContent = `center`;
body.style.alignItems = `center`;

const bodyItems = ['Taylor', 'Swift'];
bodyItems.forEach(item => {
    const topItem = document.createElement('a');
    topItem[0] === item ? topItem.href = 'index.html' : topItem
    topItem.style.textDecoration = 'none';
    topItem.style.cursor = 'pointer';
    topItem.style.color = 'black';
    topItem.textContent = item
    body.appendChild(topItem)
})

const div = document.createElement(`div`);
div.style.width = `1000px`;
div.style.height = `450px`;
div.style.display = `flex`;
div.style.justifyContent = `center`;
div.style.alignItems = `center`;
div.style.backgroundColor = `black`;
body.appendChild(div);

const lista = document.createElement('ul');
lista.style.height = '100px';
lista.style.width = '50px'
lista.style.alignItems = 'center';
lista.style.display = 'flex';
lista.style.margin = '0';
lista.style.padding = '0';
lista.style.justifyContent = 'space-between';
lista.style.listStyle = 'none';
lista.style.flexDirection = 'collumn'
div.appendChild(lista)

const tituloTitle = document.createElement('h1');
tituloTitle.textContent = 'Atividade Final';
tituloTitle.style.textAlign = 'top';
tituloTitle.style.color = 'white';
div.appendChild(tituloTitle);


const nomeInput = document.createElement(`input`);
nomeInput.placeholder = "Digite seu nome: "
nomeInput.style.width ='50%';
nomeInput.style.display ='block';
nomeInput.style.marginTop = '20px';
nomeInput.style.padding = '5px';
nomeInput.style.margin = 'auto';
div.appendChild(nomeInput);

const nota1Input = document.createElement(`input`);
nota1Input.placeholder = "Digite a 1° nota: "
nota1Input.style.width ='50%';
nota1Input.style.display ='block';
nota1Input.style.marginTop = '20px';
nota1Input.style.padding = '5px';
nota1Input.style.margin = 'auto';
div.appendChild(nota1Input);


const nota2Input = document.createElement(`input`);
nota2Input.placeholder = "Digite a 2° nota: "
nota2Input.style.width ='50%';
nota2Input.style.display ='block';
nota2Input.style.marginTop = '20px';
nota2Input.style.padding = '5px';
nota2Input.style.margin = 'auto';
div.appendChild(nota2Input);

const nota3Input = document.createElement(`input`);
nota3Input.placeholder = "Digite a 3° nota: "
nota3Input.style.width ='50%';
nota3Input.style.display ='block';
nota3Input.style.marginTop = '20px';
nota3Input.style.padding = '5px';
nota3Input.style.margin = 'auto';
div.appendChild(nota3Input);

const submitButton = document.createElement('button')
submitButton.style.width = '50%';
submitButton.style.display = 'block';
submitButton.style.marginTop = '20px';
submitButton.style.padding = '5px';
submitButton.style.margin = 'auto';
submitButton.style.backgroundColor = 'white';
submitButton.style.color = 'black';
submitButton.textContent = 'Clique para calcular sua média';
div.appendChild(submitButton)

const resultado = document.createElement('p');
resultado.style.width = '50%';
resultado.style.height = '10px'
resultado.style.display = 'block'; 
resultado.style.marginTop = '20px';
resultado.style.padding = '5px';
resultado.style.margin = 'auto';
resultado.style.textAlign = 'center';
resultado.style.backgroundColor = 'white';
div.appendChild(resultado);

submitButton.addEventListener('click', () => {
    const nt1 = parseFloat(nota1Input.value);
    const nt2 = parseFloat(nota2Input.value);
    const nt3 = parseFloat(nota3Input.value);
    const media = (nt1 + nt2 + nt3) / 3;

    resultado.textContent = `Bem-vindo, ${nomeInput.value}, sua média é, ${media}`
})

const rodape = document.createElement('footer');
rodape.style.width = '100px';
rodape.style.height = '50px';
rodape.style.position = 'absolute';
rodape.style.bottom = '0';
rodape.style.backgroundColor = 'black';
document.body.appendChild(rodape);

const rodapeText = document.createElement('p');
rodapeText.style.textAlign = 'center';
rodapeText.style.color = 'white';
rodapeText.textContent = 'The tortured poets departament'
rodape.appendChild(rodapeText);