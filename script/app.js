const lista_alunos = document.querySelector("#lista_alunos");
const turma = document.querySelector("#turma");
const alunos = [
    // ================= 6º ANO =================
    { nome: "Ana Silva", serie: "6A" },
    { nome: "Bruno Costa", serie: "6A" },
    { nome: "Carla Souza", serie: "6A" },
    { nome: "Diego Rocha", serie: "6A" },
    { nome: "Eduarda Lima", serie: "6A" },
    { nome: "Felipe Santos", serie: "6A" },
    { nome: "Gabriela Alves", serie: "6A" },
    { nome: "Henrique Melo", serie: "6A" },
    { nome: "Isabela Dias", serie: "6A" },
    { nome: "João Pedro", serie: "6A" },
  
    { nome: "Lucas Martins", serie: "6B" },
    { nome: "Mariana Torres", serie: "6B" },
    { nome: "Nicolas Duarte", serie: "6B" },
    { nome: "Olívia Gomes", serie: "6B" },
    { nome: "Paulo Henrique", serie: "6B" },
    { nome: "Queila Fernandes", serie: "6B" },
    { nome: "Rafael Cardoso", serie: "6B" },
    { nome: "Sara Monteiro", serie: "6B" },
    { nome: "Tiago Barbosa", serie: "6B" },
    { nome: "Vitória Freitas", serie: "6B" },
  
    { nome: "Arthur Ribeiro", serie: "6C" },
    { nome: "Beatriz Farias", serie: "6C" },
    { nome: "Caio Oliveira", serie: "6C" },
    { nome: "Daniela Cunha", serie: "6C" },
    { nome: "Eduardo Nunes", serie: "6C" },
    { nome: "Fernanda Pires", serie: "6C" },
    { nome: "Gustavo Ramos", serie: "6C" },
    { nome: "Helena Castro", serie: "6C" },
    { nome: "Igor Batista", serie: "6C" },
    { nome: "Juliana Prado", serie: "6C" },
  
    { nome: "Alice Vieira", serie: "6D" },
    { nome: "Bernardo Lopes", serie: "6D" },
    { nome: "Camila Teixeira", serie: "6D" },
    { nome: "Douglas Brito", serie: "6D" },
    { nome: "Elisa Moraes", serie: "6D" },
    { nome: "Fábio Correia", serie: "6D" },
    { nome: "Giovana Silva", serie: "6D" },
    { nome: "Hugo Peixoto", serie: "6D" },
    { nome: "Ingrid Barbosa", serie: "6D" },
    { nome: "José Carlos", serie: "6D" },
  
    // ================= 7º ANO =================
    { nome: "Larissa Rocha", serie: "7A" },
    { nome: "Mateus Nogueira", serie: "7A" },
    { nome: "Natália Ferreira", serie: "7A" },
    { nome: "Otávio Mendes", serie: "7A" },
    { nome: "Priscila Azevedo", serie: "7A" },
    { nome: "Renato Moura", serie: "7A" },
    { nome: "Sofia Martins", serie: "7A" },
    { nome: "Thiago Gomes", serie: "7A" },
    { nome: "Ursula Campos", serie: "7A" },
    { nome: "Vinícius Barros", serie: "7A" },
  
    { nome: "Alice Rodrigues", serie: "7B" },
    { nome: "Bruno Oliveira", serie: "7B" },
    { nome: "Clara Moreira", serie: "7B" },
    { nome: "Diego Almeida", serie: "7B" },
    { nome: "Esther Matos", serie: "7B" },
    { nome: "Felipe Carvalho", serie: "7B" },
    { nome: "Gabriel Antunes", serie: "7B" },
    { nome: "Helena Duarte", serie: "7B" },
    { nome: "Isac Fernandes", serie: "7B" },
    { nome: "Júlia Pacheco", serie: "7B" },
  
    { nome: "Kevin Ribeiro", serie: "7C" },
    { nome: "Larissa Figueiredo", serie: "7C" },
    { nome: "Marcos Souza", serie: "7C" },
    { nome: "Nicole Paiva", serie: "7C" },
    { nome: "Otávio Silva", serie: "7C" },
    { nome: "Pedro Araujo", serie: "7C" },
    { nome: "Queila Fernandes", serie: "7C" },
    { nome: "Rafaela Lopes", serie: "7C" },
    { nome: "Samuel Castro", serie: "7C" },
    { nome: "Tatiane Vieira", serie: "7C" },
  
    { nome: "Ulysses Prado", serie: "7D" },
    { nome: "Valentina Costa", serie: "7D" },
    { nome: "Wesley Lima", serie: "7D" },
    { nome: "Xavier Martins", serie: "7D" },
    { nome: "Yasmin Rocha", serie: "7D" },
    { nome: "Zeca Albuquerque", serie: "7D" },
    { nome: "Alice Nunes", serie: "7D" },
    { nome: "Bruno Machado", serie: "7D" },
    { nome: "Catarina Gomes", serie: "7D" },
    { nome: "Daniel Barbosa", serie: "7D" },
  
    // ================= 8º ANO =================
    { nome: "Amanda Souza", serie: "8A" },
    { nome: "Bruno Torres", serie: "8A" },
    { nome: "Camila Freitas", serie: "8A" },
    { nome: "Daniel Ribeiro", serie: "8A" },
    { nome: "Eduarda Correia", serie: "8A" },
    { nome: "Fernando Castro", serie: "8A" },
    { nome: "Giovana Costa", serie: "8A" },
    { nome: "Henrique Silva", serie: "8A" },
    { nome: "Isadora Melo", serie: "8A" },
    { nome: "João Victor", serie: "8A" },
  
    { nome: "Kauã Fernandes", serie: "8B" },
    { nome: "Larissa Gomes", serie: "8B" },
    { nome: "Matheus Dias", serie: "8B" },
    { nome: "Natália Prado", serie: "8B" },
    { nome: "Otávio Ramos", serie: "8B" },
    { nome: "Paula Rocha", serie: "8B" },
    { nome: "Rafael Melo", serie: "8B" },
    { nome: "Sabrina Alves", serie: "8B" },
    { nome: "Tiago Nunes", serie: "8B" },
    { nome: "Vitória Martins", serie: "8B" },
  
    { nome: "Alice Duarte", serie: "8C" },
    { nome: "Bernardo Paiva", serie: "8C" },
    { nome: "Caio Lopes", serie: "8C" },
    { nome: "Daniela Cardoso", serie: "8C" },
    { nome: "Eduardo Brito", serie: "8C" },
    { nome: "Fernanda Farias", serie: "8C" },
    { nome: "Gustavo Azevedo", serie: "8C" },
    { nome: "Helena Matos", serie: "8C" },
    { nome: "Igor Ferreira", serie: "8C" },
    { nome: "Juliana Moura", serie: "8C" },
  
    { nome: "Leonardo Silva", serie: "8D" },
    { nome: "Mariana Torres", serie: "8D" },
    { nome: "Nicolas Almeida", serie: "8D" },
    { nome: "Olívia Rocha", serie: "8D" },
    { nome: "Pedro Henrique", serie: "8D" },
    { nome: "Queila Ribeiro", serie: "8D" },
    { nome: "Rodrigo Mendes", serie: "8D" },
    { nome: "Sara Lima", serie: "8D" },
    { nome: "Thiago Correia", serie: "8D" },
    { nome: "Vanessa Monteiro", serie: "8D" },
  
    // ================= 9º ANO =================
    { nome: "Arthur Cunha", serie: "9A" },
    { nome: "Beatriz Almeida", serie: "9A" },
    { nome: "Carlos Eduardo", serie: "9A" },
    { nome: "Daniela Souza", serie: "9A" },
    { nome: "Enzo Gabriel", serie: "9A" },
    { nome: "Fernanda Castro", serie: "9A" },
    { nome: "Guilherme Silva", serie: "9A" },
    { nome: "Heloísa Martins", serie: "9A" },
    { nome: "Igor Nogueira", serie: "9A" },
    { nome: "Júlia Freitas", serie: "9A" },
  
    { nome: "Kauan Rodrigues", serie: "9B" },
    { nome: "Lara Carvalho", serie: "9B" },
    { nome: "Miguel Costa", serie: "9B" },
    { nome: "Nicole Santos", serie: "9B" },
    { nome: "Otávio Lima", serie: "9B" },
    { nome: "Pedro Lucas", serie: "9B" },
    { nome: "Rafaela Dias", serie: "9B" },
    { nome: "Samuel Ribeiro", serie: "9B" },
    { nome: "Tatiane Gomes", serie: "9B" },
    { nome: "Victor Hugo", serie: "9B" },
  
    { nome: "Alice Barbosa", serie: "9C" },
    { nome: "Bruno Silva", serie: "9C" },
    { nome: "Caio Mendes", serie: "9C" },
    { nome: "Daniela Rocha", serie: "9C" },
    { nome: "Enzo Nunes", serie: "9C" },
    { nome: "Fernanda Souza", serie: "9C" },
    { nome: "Gabriel Martins", serie: "9C" },
    { nome: "Helena Oliveira", serie: "9C" },
    { nome: "Igor Almeida", serie: "9C" },
    { nome: "João Miguel", serie: "9C" },
  
    { nome: "Kauã Castro", serie: "9D" },
    { nome: "Lívia Duarte", serie: "9D" },
    { nome: "Matheus Rocha", serie: "9D" },
    { nome: "Natália Cardoso", serie: "9D" },
    { nome: "Otávio Prado", serie: "9D" },
    { nome: "Paula Fernandes", serie: "9D" },
    { nome: "Rafael Azevedo", serie: "9D" },
    { nome: "Sofia Mendes", serie: "9D" },
    { nome: "Thiago Costa", serie: "9D" },
    { nome: "Vitória Rocha", serie: "9D" },
  
    // ================= 1º ANO =================
    { nome: "André Luiz", serie: "1A" },
    { nome: "Bianca Souza", serie: "1A" },
    { nome: "Caio Henrique", serie: "1A" },
    { nome: "Daniel Martins", serie: "1A" },
    { nome: "Ester Rocha", serie: "1A" },
    { nome: "Felipe Araújo", serie: "1A" },
    { nome: "Gabriela Freitas", serie: "1A" },
    { nome: "Hugo Nogueira", serie: "1A" },
    { nome: "Isabela Ramos", serie: "1A" },
    { nome: "João Vitor", serie: "1A" },
  
    { nome: "Kauê Almeida", serie: "1B" },
    { nome: "Larissa Prado", serie: "1B" },
    { nome: "Matheus Correia", serie: "1B" },
    { nome: "Natália Silva", serie: "1B" },
    { nome: "Otávio Fernandes", serie: "1B" },
    { nome: "Paula Souza", serie: "1B" },
    { nome: "Renato Lima", serie: "1B" },
    { nome: "Sabrina Rocha", serie: "1B" },
    { nome: "Tiago Mendes", serie: "1B" },
    { nome: "Vitória Duarte", serie: "1B" },
  
    { nome: "Alice Nogueira", serie: "1C" },
    { nome: "Bruno Freitas", serie: "1C" },
    { nome: "Carolina Rocha", serie: "1C" },
    { nome: "Diego Martins", serie: "1C" },
    { nome: "Eduarda Prado", serie: "1C" },
    { nome: "Fernando Souza", serie: "1C" },
    { nome: "Giovana Costa", serie: "1C" },
    { nome: "Henrique Ramos", serie: "1C" },
    { nome: "Isac Cardoso", serie: "1C" },
    { nome: "Juliana Torres", serie: "1C" },
  
    { nome: "Lucas Almeida", serie: "1D" },
    { nome: "Mariana Freitas", serie: "1D" },
    { nome: "Nicolas Rocha", serie: "1D" },
    { nome: "Olívia Martins", serie: "1D" },
    { nome: "Pedro Henrique", serie: "1D" },
    { nome: "Queila Souza", serie: "1D" },
    { nome: "Rafael Gomes", serie: "1D" },
    { nome: "Sara Duarte", serie: "1D" },
    { nome: "Thiago Ramos", serie: "1D" },
    { nome: "Vitória Carvalho", serie: "1D" },
  
    // ================= 2º ANO =================
    { nome: "Alexandre Souza", serie: "2A" },
    { nome: "Beatriz Lima", serie: "2A" },
    { nome: "Carlos Henrique", serie: "2A" },
    { nome: "Daniela Ramos", serie: "2A" },
    { nome: "Eduardo Martins", serie: "2A" },
    { nome: "Fernanda Rocha", serie: "2A" },
    { nome: "Gabriel Azevedo", serie: "2A" },
    { nome: "Helena Duarte", serie: "2A" },
    { nome: "Isabela Torres", serie: "2A" },
    { nome: "João Lucas", serie: "2A" },
  
    { nome: "Kauã Freitas", serie: "2B" },
    { nome: "Larissa Almeida", serie: "2B" },
    { nome: "Matheus Ramos", serie: "2B" },
    { nome: "Nicole Souza", serie: "2B" },
    { nome: "Otávio Duarte", serie: "2B" },
    { nome: "Paula Carvalho", serie: "2B" },
    { nome: "Rafael Mendes", serie: "2B" },
    { nome: "Sofia Nogueira", serie: "2B" },
    { nome: "Tiago Rocha", serie: "2B" },
    { nome: "Vitória Silva", serie: "2B" },
  
    { nome: "Alice Ramos", serie: "2C" },
    { nome: "Bruno Souza", serie: "2C" },
    { nome: "Caio Duarte", serie: "2C" },
    { nome: "Daniela Almeida", serie: "2C" },
    { nome: "Eduarda Martins", serie: "2C" },
    { nome: "Felipe Azevedo", serie: "2C" },
    { nome: "Gabriela Lima", serie: "2C" },
    { nome: "Henrique Rocha", serie: "2C" },
    { nome: "Igor Torres", serie: "2C" },
    { nome: "Júlia Carvalho", serie: "2C" },
  
    { nome: "Leonardo Souza", serie: "2D" },
    { nome: "Mariana Azevedo", serie: "2D" },
    { nome: "Nicolas Rocha", serie: "2D" },
    { nome: "Olívia Martins", serie: "2D" },
    { nome: "Pedro Duarte", serie: "2D" },
    { nome: "Queila Nogueira", serie: "2D" },
    { nome: "Rafael Silva", serie: "2D" },
    { nome: "Sabrina Costa", serie: "2D" },
    { nome: "Thiago Ramos", serie: "2D" },
    { nome: "Vitória Prado", serie: "2D" },
  
    // ================= 3º ANO =================
    { nome: "André Rocha", serie: "3A" },
    { nome: "Bianca Martins", serie: "3A" },
    { nome: "Caio Souza", serie: "3A" },
    { nome: "Daniela Torres", serie: "3A" },
    { nome: "Eduardo Almeida", serie: "3A" },
    { nome: "Fernanda Ramos", serie: "3A" },
    { nome: "Gabriel Duarte", serie: "3A" },
    { nome: "Helena Carvalho", serie: "3A" },
    { nome: "Isabela Rocha", serie: "3A" },
    { nome: "João Pedro", serie: "3A" },
  
    { nome: "Kauã Almeida", serie: "3B" },
    { nome: "Larissa Ramos", serie: "3B" },
    { nome: "Matheus Souza", serie: "3B" },
    { nome: "Nicole Duarte", serie: "3B" },
    { nome: "Otávio Martins", serie: "3B" },
    { nome: "Paula Rocha", serie: "3B" },
    { nome: "Rafael Torres", serie: "3B" },
    { nome: "Sofia Carvalho", serie: "3B" },
    { nome: "Tiago Silva", serie: "3B" },
    { nome: "Vitória Ramos", serie: "3B" },
  
    { nome: "Alice Martins", serie: "3C" },
    { nome: "Bruno Rocha", serie: "3C" },
    { nome: "Carolina Souza", serie: "3C" },
    { nome: "Diego Duarte", serie: "3C" },
    { nome: "Eduarda Almeida", serie: "3C" },
    { nome: "Felipe Carvalho", serie: "3C" },
    { nome: "Giovana Ramos", serie: "3C" },
    { nome: "Henrique Silva", serie: "3C" },
    { nome: "Isac Rocha", serie: "3C" },
    { nome: "Juliana Torres", serie: "3C" },
  
    { nome: "Lucas Souza", serie: "3D" },
    { nome: "Mariana Duarte", serie: "3D" },
    { nome: "Nicolas Ramos", serie: "3D" },
    { nome: "Olívia Rocha", serie: "3D" },
    { nome: "Pedro Martins", serie: "3D" },
    { nome: "Queila Silva", serie: "3D" },
    { nome: "Rafael Carvalho", serie: "3D" },
    { nome: "Sara Almeida", serie: "3D" },
    { nome: "Thiago Rocha", serie: "3D" },
    { nome: "Vitória Nogueira", serie: "3D" },
  ];
  


const gerar_lista_alunos = (n)=>{
    let lista = []
    for(let x = 0;x < alunos.length;x++){
        if (alunos[x]['serie'] == n){
            lista.push(alunos[x]['nome'])
            // console.log(,alunos[x]['serie']) 
        }             
    }
    return lista;
}
const gerarListaCheckbox = (array)=>{
    return array.map((item, index)=>{
        return `
        <div>
            <input type="checkbox" id="chk_${index}" value="${item}">
            <label for="chk_${index}">${item}</label>
        </div>    
        `;

    }).join("");
    }

    let selecionados=() =>{ Array.from(document.querySelectorAll("#lista_alunos input[type='checkbox']:checked")).map(x=> x.value)}
     
turma.addEventListener('change',()=>{
    
    lista_alunos.innerHTML = gerarListaCheckbox(gerar_lista_alunos(turma.value));
    
})
