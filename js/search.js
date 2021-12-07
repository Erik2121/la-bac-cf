const date=[

    {
        numeAutor:"Camil Petre",
        opera:"Particularitatile personajului principal-Ultima nopate de dragoste Intaia nopate de razboi",
        href:""
    },
    
    {
        numeAutor:"Camil Petre",
        opera:"Relatia dintre 2 personaje-Ultima nopate de dragoste Intaia nopate de razboi",
        href:""
    },
    
    {
        numeAutor:"Camil Petre",
        opera:"Tema si viziune-Ultima nopate de dragoste Intaia nopate de razboi",
        href:""
    },
    {
        numeAutor:"Constantin Negrutii",
        opera:"Particularitatile personajului principal-Alexandru Lapusneanu",
        href:""
    },
    
    {
        numeAutor:"Constantin Negrutii",
        opera:"Relatia dintre 2 personaje-Alexandru Lapusneanu",
        href:""
    },
    
    {
        numeAutor:"Constantin Negrutii",
        opera:"Tema si viziune-Alexandru Lapusneanu",
        href:""
    },
    {
        numeAutor:"George Bacovia",
        opera:"Tema si viziune-Plumb",
        href:""
    },
    {
        numeAutor:"George Calinescu",
        opera:"Particularitatile personajului principal-Enigma Otiliei",
        href:""
    },
    
    {
        numeAutor:"George Calinescu",
        opera:"Relatia dintre 2 personaje-Enigma Otiliei",
        href:""
    },
    
    {
        numeAutor:"George Calinescu",
        opera:"Tema si viziune-Enigma Otiliei",
        href:""
    },
    
    {
        numeAutor:"Ioan Slavici",
        opera:"Particularitatile personajului principal-Moara cu Noroc",
        href:""
    },
    
    {
        numeAutor:"Ioan Slavici",
        opera:"Relatia dintre 2 personaje-Moara cu Noroc",
        href:""
    },
    
    {
        numeAutor:"Ioan Slavici",
        opera:"Tema si viziune-Moara cu Noroc",
        href:""
    },
    
    {
        numeAutor:"Ion Barbu",
        opera:"Tema si viziune-Riga Crypto si Lapona Enigel",
        href:""
    },
    {
        numeAutor:"Ion Creanga",
        opera:"Particularitatile personajului principal-Harap Alb",
        href:""
    },
    {
        numeAutor:"Ion Creanga",
        opera:"Relatia dintre 2 personaje-Harap Alb",
        href:""
    },
    {
        numeAutor:"Ion Creanga",
        opera:"Tema si viziune-Harap Alb",
        href:""
    },
    {
        numeAutor:"Ion Luca Caragiale",
        opera:"Particularitatile personajului principal-O scrisoare pierduta",
        href:""
    },
    {
        numeAutor:"Ion Luca Caragiale",
        opera:"Relatia dintre 2 personaje-O scrisoare pierduta",
        href:""
    },
    {
        numeAutor:"Ion Luca Caragiale",
        opera:"Tema si viziune-O scrisoare pierduta",
        href:""
    },
    {
        numeAutor:"Ion Pilat",
        opera:"Tema si viziune-Aci sosi pe vremuri",
        href:""
    },
    {
        numeAutor:"Liviu Rebreanu",
        opera:"Particularitatile personajuliu principal-Ion",
        href:""
    },
    
    {
        numeAutor:"Liviu Rebreanu",
        opera:"Relatia dintre 2 personaje-Ion",
        href:""
    },
    
    {
        numeAutor:"Liviu Rebreanu",
        opera:"Tema si viziune-Ion",
        href:""
    },
    {
        numeAutor:"Lucian Blaga",
        opera:"Tema si viziune-Eu nu strivesc corola de minuni a lumii",
        href:""
    },
    {
        numeAutor:"Mihai Eminescu",
        opera:"Tema si viziune-Luceafar",
        href:""
    },
    {
        numeAutor:"Mihail Sadoveanu",
        opera:"Particularitatile personajului principal-Baltagul",
        href:""
    },
    
    {
        numeAutor:"Mihail Sadoveanu",
        opera:"Relatia dintre 2 personaje-Baltagul",
        href:""
    },
    
    {
        numeAutor:"Mihail Sadoveanu",
        opera:"Tema si viziune-Baltagul",
        href:""
    },
    {
        numeAutor:"Mircea Eliade",
        opera:"Particularitatile personajuliu principa-Maitreyi",
        href:""
    },
    {
        numeAutor:"Mircea Eliade",
        opera:"Relatia dintre 2 personaje-Maitreyi",
        href:""
    },
    {
        numeAutor:"Mircea Eliade",
        opera:"Tema si viziune-Maitreyi",
        href:""
    },
    
    {
        numeAutor:"Tudor Arghezi",
        opera:"Tema si viziune-Flori de Mucigai",
        href:""
    },
    
];


function selectElement(selector){
    return document.querySelector(selector);
};
function clearResults()
{
    selectElement('.ss').innerHTML="";
}

document.addEventListener("keyup", function(){
     
    const search=selectElement(".search").value;
   clearResults();
   for(let i=0;i<date.length;i++)
   {
       if(search.length >0){
       if(
           date[i].numeAutor.toLocaleLowerCase().includes(search.toLocaleLowerCase())||
           date[i].opera.toLocaleLowerCase().includes(search.toLocaleLowerCase())
       )
       {
           selectElement('.ss').innerHTML +=`
           
             <a class="lista-autori" href="${date[i].href}">${date[i].opera}</a>
            

           `;
       }
    }
   }
  });