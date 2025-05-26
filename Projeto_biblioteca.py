import pandas as pd

pd.set_option('display.max_columns', None)

livros =[('Mulheres que correm com os lobos: Mitos e histórias do arquétipo da Mulher Selvagem','Clarissa Pinkola Estés',' Waldéa Barcellos','Rocco',' 17/09/2018','55'),
          ('O homem mais rico da Babilônia','George S Clason','000','HarperCollins','04/08/2017','39'),
          ('A garota do lago','Charlie Donlea','000','Faro Editorial','01/01/2017','70'),
          ('Do Mil ao Milhão. Sem Cortar o Cafezinho','Thiago Nigro', '000','HarperCollins',' 10/11/2018','53'),
          ('Torto arado','Itamar Vieira Junior','000','Todavia','7/08/2019', '57'),
          (' Orgulho e preconceito: A prova de que o amor pode nascer do impossível','Jane Austen','000','Ciranda Cultural','01/01/2018','48'),
          ('O morro dos ventos uivantes','Emily Brontë','000','Principis','17/06/2019','36'),
          ('Cartas de um diabo a seu aprendiz','C. S. Lewis','Gabriele Greggersen','Thomas Nelson Brasil','18/11/2017','29'),
          ('A revolução dos bichos: Um conto de fadas','George Orwell','Heitor Aquino Ferreira','Companhia das Letras','10/01/2007','33'),
          ('Mais esperto que o Diabo: O mistério revelado da liberdade e do sucesso','Napoleon Hill','000','Citadel','10/07/2014','51'),
          (' O diário de Anne Frank','Anne Frank','BR75','Principis','08/01/2020','78'),
          ('A escolha: 3','Kiera Cass','Cristian Clemente','Seguinte','22/04/2014','40'),
          ('Harry Potter e a Pedra Filosofal: 1 ','J.K. Rowling','Lia Wyler',' Rocco','19/08/2017','90'),
          ('Espada de vidro','Victoria Aveyard','000','Seguinte','04/02/2016','234'),
          ('O Homem de Giz','C. J. Tudor','Alexandre Raposo','Intrínseca','15/03/2018','83'),
          ('Lady Killers: Assassinas em Série','Tori Telfer','000',' Darkside','24/01/2019','81'),
          ('A Árvore do Halloween','Ray Bradbury','Natalie Gerhardt ','Bertrand Brasil','13/10/2014','64'),
          ('Algoritmos E Lógica Da Programação',' Marco A. Furlan de Souza, Marcelo Marques Gomes, Marcio Vieira Soares, Ricardo Concilio','000','Cengage Learning','10/01/2019', '55'),
          ('Inteligência Artificial - Do Zero ao Metaverso','Martha Gabriel','000','Atlas','15/06/2022','43'),
          ('Inteligência Artificial X Humanos: O que a Ciência Cognitiva nos Ensina ao Colocar Frente a Frente a Mente Humana e a IA','Michael W. Eysenck , Christine Eysenck','Vitor Geraldi Haase Gisele Klein','Artmed','10/02/2023','68')]      
colunas=['Titulo','Autor','Tradutor','Editora','Lançamento','Copias']
linhas=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']

biblioteca_df = pd.DataFrame(data=livros, columns=colunas, index=linhas)
print(biblioteca_df)




#1)Apresente em tela (output) toda a base de dados.
#print(Biblioteca_df)
#2) Apresente o tamanho do seu dataframe (quantas colunas x linhas).
#print(biblioteca_df.size)
#3) Acesse a linha (x) e apresente em tela todas as características do item. 
#print(biblioteca_df.loc['3'])
#4) Verifique se o dataframe está vazio. 
#print(biblioteca_df.empty)
#5) Apresente em tela os 5 primeiros registros da base de dados.
#print(Biblioteca.head(5))
#6) Exclua um item (linha) de sua de sua base de dados.
#biblioteca_df.drop(index=['19','20'], inplace= True)
#biblioteca_df.drop(index=['19','20'], ['Titulo','Autor'], inplace= True)
#7) Adicione um item (linha) na sua base de dados
#ver em sala
#biblioteca_df.loc[len(biblioteca_df)] = \
#{"Titulo":"A historia da minha vida","Autor":"derson","Tradutor":"natan","Editora":"vidaplena", "Lancamento":"01/02/2003", "Copias":"100"}
#Biblioteca_df['sexo'] = 'F'
#8) Transponha a coluna para a linha em sua base de dados
#print(biblioteca_df.T)
#9) Apresente em tela somente a 1a e a 2a coluna (rótulo) da base de dados

#10) Informe como foi desenvolvido o Projeto.

#T: usado para transpor linhas e colunas.• at: acessa um único elemento utilizando rótulos.• iat: acessa um único elemento utilizando índices.• loc: seleção de elementos utilizando rótulos.• iloc: seleção de elementos utilizando índices