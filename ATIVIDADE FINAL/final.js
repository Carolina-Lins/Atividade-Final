const body = document.querySelector(`body`);
body.style.backgroundColor = `gray`;
body.style.display = `flex`;
body.style.justifyContent = `center`;
body.style.alignItems = `center`;

const div = document.createElement(`div`);
div.style.width = `800px`;
div.style.height = `450px`;
div.style.display = `flex`;
div.style.marginTop = '13vh';
div.style.justifyContent = `center`;
div.style.alignItems = `center`;
div.style.backgroundColor = `black`;
body.appendChild(div);

const tituloTitle = document.createElement(`h1`);
tituloTitle.textContent = 'Atividade Final';
tituloTitle.style.marginLeft = '10vh'
tituloTitle.style.marginTop = '5vh';
tituloTitle.style.marginLeft = '4vh';
tituloTitle.style.marginLeft = '28vh';
tituloTitle.style.color = 'white';
div.appendChild(tituloTitle);

const div2 = document.createElement('div');
div2.style.width = '600px';
div2.style.height = '300px';
div2.style.backgroundColor = 'black';
div2.style.marginLeft = '14vh';
div.appendChild(div2);

const nomeInput = document.createElement(`input`);
nomeInput.placeholder = "Digite seu nome: "
nomeInput.style.width ='50%';
nomeInput.style.display ='block';
nomeInput.style.marginTop = '5vh';
nomeInput.style.marginLeft = '4vh';
nomeInput.style.marginLeft = '28vh';
nomeInput.style.margin = 'auto';
div2.appendChild(nomeInput);

const nota1Input = document.createElement(`input`);
nota1Input.placeholder = "Digite a 1° nota: "
nota1Input.style.width ='50%';
nota1Input.style.height = '20px';
nota1Input.style.display ='block';
nota1Input.style.marginTop = '5vh';
nota1Input.style.marginLeft = '4vh';
nota1Input.style.marginLeft = '28vh';
nota1Input.style.margin =  'auto';
div2.appendChild(nota1Input);


const nota2Input = document.createElement(`input`);
nota2Input.placeholder = "Digite a 2° nota: "
nota2Input.style.width ='50%';
nota2Input.style.height = '20px';
nota2Input.style.display ='block';
nota2Input.style.marginTop = '20px';
nota2Input.style.marginTop = '5vh';
nota2Input.style.marginLeft = '4vh';
nota2Input.style.marginLeft = '28vh';
nota2Input.style.margin = 'auto';
div2.appendChild(nota2Input);

const nota3Input = document.createElement(`input`);
nota3Input.placeholder = "Digite a 3° nota: "
nota3Input.style.width ='50%';
nota3Input.style.display ='block';
nota3Input.style.marginTop = '20px';
nota3Input.style.marginTop = '5vh';
nota3Input.style.marginLeft = '9vh';
nota3Input.style.marginLeft = '-8vh';
nota3Input.style.margin = 'auto';
div2.appendChild(nota3Input);

const submitButton = document.createElement('button')
submitButton.style.width = '50%';
submitButton.style.display = 'block';
submitButton.style.margin = 'auto';
submitButton.style.marginTop = '20px';
submitButton.style.marginTop = '20vh';
submitButton.style.marginLeft = '9vh';
submitButton.style.marginLeft = '-7vh';
submitButton.style.backgroundColor = 'gray';
submitButton.textContent = 'Clique para calcular sua média';
div2.appendChild(submitButton)

const resultado = document.createElement('p');
resultado.style.width = '50%';
resultado.style.height = '80px'
resultado.style.display = 'block'; 
resultado.style.margin = 'auto';
resultado.style.marginLeft = '-10vh'
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


const navTitulo = document.createElement('nav');
navTitulo.style.width = '100%';
navTitulo.style.height = '50px';
navTitulo.style.backgroundColor = 'white';
navTitulo.style.marginLeft = 'vh';
navTitulo.style.marginTop = '-90vh'
navTitulo.style.position = 'absolute';
navTitulo.style.display = 'flex';
navTitulo.style.justifyContent = 'center';
navTitulo.style.alignItems = 'center';
body.appendChild(navTitulo)

const navText = document.createElement('p');
navText.style.backgroundColor = 'white'
navText.style.color = 'black'
navText.textContent = 'Taylor Swift'
navTitulo.appendChild(navText)

const rodape = document.createElement('footer');
rodape.style.width = '100%';
rodape.style.height = '50px';
rodape.style.position = 'absolute';
rodape.style.marginLeft= 'vh';
rodape.style.marginTop = '47%';
rodape.style.display = 'flex';
rodape.style.justifyContent = 'center';
rodape.style.alignItems = 'center';
rodape.style.backgroundColor = 'black';
body.appendChild(rodape);

const rodapeText = document.createElement('p');
rodapeText.style.textAlign = 'center';
rodapeText.style.color = 'white';
rodapeText.textContent = 'The tortured poets departament'
rodape.appendChild(rodapeText);