Merge Sort - Explicação e Passo a Passo


Merge Sort é um algoritmo de ordenação eficiente baseado no paradigma Divide and Conquer (Dividir e Conquistar). Ele divide a lista original em sublistas menores, ordena essas sublistas e depois as combina para formar a lista final ordenada.


Funcionamento do Merge Sort


1.Dividir:

A lista original é dividida repetidamente em duas partes iguais (ou quase iguais) até que cada sublista contenha apenas um elemento. Uma lista com um único elemento é considerada ordenada.

2.Conquistar:

Cada par de sublistas é então combinado ("merge") de forma ordenada para formar sublistas maiores e ordenadas.

3.Combinar:

Esse processo continua até que todas as sublistas sejam combinadas, resultando na lista final ordenada.



Passo a Passo do Algoritmo


1. Dividir a Lista

Determine o ponto médio da lista.

Divida a lista em duas sublistas: esquerda e direita.

Continue dividindo até que cada sublista tenha apenas um elemento.

2. Ordenar e Combinar (Merge)

Compare os primeiros elementos das sublistas esquerda e direita.

Coloque o menor elemento na lista final ordenada.

Repita o processo até que todos os elementos sejam combinados em ordem crescente.


PSEUDOCÓDIGO


mergeSort(array):
    if tamanho(array) <= 1:
        return array

    meio = tamanho(array) / 2
    esquerda = array[0 : meio]
    direita = array[meio : fim]

    esquerda_ordenada = mergeSort(esquerda)
    direita_ordenada = mergeSort(direita)

    return merge(esquerda_ordenada, direita_ordenada)

merge(esquerda, direita):
    lista_resultante = []
    enquanto esquerda e direita não estiverem vazias:
        se esquerda[0] < direita[0]:
            lista_resultante.adicionar(esquerda.remover_primeiro())
        senão:
            lista_resultante.adicionar(direita.remover_primeiro())

    adicionar todos os elementos restantes de esquerda e direita à lista_resultante
    return lista_resultante


Exemplo Prático


Ordenar a lista [38, 27, 43, 3, 9, 82, 10]:


Passo 1: Divisão


[38, 27, 43, 3, 9, 82, 10]

Divide em: [38, 27, 43] e [3, 9, 82, 10]

[38, 27, 43]:

Divide em: [38] e [27, 43]

[27, 43]:

Divide em: [27] e [43]

[3, 9, 82, 10]:

Divide em: [3, 9] e [82, 10]

[3, 9]:

Divide em: [3] e [9]

[82, 10]:

Divide em: [82] e [10]



Passo 2: Combinação



[27] e [43]:

Combina em: [27, 43]

[38] e [27, 43]:

Combina em: [27, 38, 43]

[3] e [9]:

Combina em: [3, 9]

[82] e [10]:

Combina em: [10, 82]

[3, 9] e [10, 82]:

Combina em: [3, 9, 10, 82]

[27, 38, 43] e [3, 9, 10, 82]:

Combina em: [3, 9, 10, 27, 38, 43, 82]

Resultado final: [3, 9, 10, 27, 38, 43, 82]



Vantagens do Merge Sort


Estável: Mantém a ordem relativa dos elementos iguais.

Complexidade previsível:

Pior caso: O(n log n)

Caso médio: O(n log n)

Melhor caso: O(n log n)

Ideal para grandes volumes de dados.