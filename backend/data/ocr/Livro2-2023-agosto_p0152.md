Exercício 18.6 Seja $(T)_\alpha$ a matriz da transformação $T$ em uma base qualquer, que designaremos por $\alpha$. Seja $(I)_\beta^\alpha$ a matriz cujas colunas são as coordenadas dos vetores da base canônica na base $\alpha$. Mostre que a matriz de $T$ na base canônica, $(T)_\beta$, é dada por $(T)_\beta = ((I)_\beta^\alpha)^{-1}(T)_\alpha(I)_\beta^\alpha$.

Exercício 18.7 Seja $(T)_\alpha$ a matriz da transformação $T$ em uma base qualquer, que designaremos por $\alpha$. Mostre que $\det(T) = \det(T)_\alpha$.

Está tudo muito bom, mas, pensando bem, nossa definição repousa sobre um Teorema que não é trivial e, principalmente, cuja demonstração deixou pontos nebulosos.² A próxima seção tem por objetivo apresentar a mesma definição em termos puramente algébricos, sem recorrer ao Teorema bonitinho mas suspeito.

18.2 Formas trilineares alternadas

Em nossa primeira discussão (capítulo 4), o determinante foi apresentado como uma função $\omega$ que, a cada terno ordenado $(\vec{u}, \vec{v}, \vec{w})$, associa um número, $\omega(\vec{u}, \vec{v}, \vec{w})$, com as propriedades:

(i) $\omega(\vec{u}, \vec{v}, \vec{w}) = 0$, se $\vec{u}, \vec{v}$ e $\vec{w}$ são linearmente dependentes
(ii) $\omega(\vec{u}_1 + t\vec{u}_2, \vec{v}, \vec{w}) = \omega(\vec{u}_1, \vec{v}, \vec{w}) + t\omega(\vec{u}_2, \vec{v}, \vec{w}) \forall t, \vec{u}_1, \vec{u}_2, \vec{v}, \vec{w}$
$\omega(\vec{u}_1 + t\vec{u}_2, \vec{w}) = \omega(\vec{u}_1, \vec{v}, \vec{w}) + t\omega(\vec{u}_2, \vec{w}) \forall t, \vec{u}_1, \vec{v}_1, \vec{w}_2, \vec{w}$
$\omega(\vec{u}, \vec{v}, \vec{w}_1 + t\vec{w}_2) = \omega(\vec{u}, \vec{v}, \vec{w}_1) + (\vec{u}, \vec{v}, \vec{w}_2 t) \forall t, \vec{u}, \vec{v}, \vec{w}_1, \vec{w}_2$

Naquela ocasião observamos que, das propriedades (i) e (ii), segue que $\omega$ troca de sinal, se trocamos de posição dois dos vetores. Assim, chamamos uma função com as propriedades (i) e (ii) de forma trilinear alternada. Em seguida, escrevendo os vetores $\vec{u}, \vec{v}$ e $\vec{w}$ na base canônica,

$$\vec{u} = a_{11}\vec{e}_1 + a_{21}\vec{e}_2 + a_{31}\vec{e}_3$$
$$\vec{v} = a_{12}\vec{e}_1 + a_{22}\vec{e}_2 + a_{32}\vec{e}_3$$
$$\vec{w} = a_{13}\vec{e}_1 + a_{23}\vec{e}_2 + a_{33}\vec{e}_3$$

e usando as propriedades (i) e (ii), obtivemos

$$\omega(\vec{u}, \vec{v}, \vec{w}) = \omega(a_{11}\vec{e}_1 + a_{21}\vec{e}_2 + a_{31}\vec{e}_3, a_{12}\vec{e}_1 + a_{22}\vec{e}_2 + a_{32}\vec{e}_3, a_{13}\vec{e}_1 + a_{23}\vec{e}_2 + a_{33}\vec{e}_3) = (a_{11}a_{22}a_{33} - a_{11}a_{23}a_{32} + a_{12}a_{23}a_{31} - a_{12}a_{21}a_{33} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31})\omega(\vec{e}_1, \vec{e}_2, \vec{e}_3).$$

Observação: Assim, o determinante $\det(\vec{u}, \vec{v}, \vec{w})$ é caracterizado por uma escolha da unidade de volume: escolhemos $\det(\vec{e}_1, \vec{e}_2, \vec{e}_3) = 1$. Daí decorre que toda forma trilinear alternada é apenas um múltiplo do determinante (é como se trocássemos a unidade de medida: todos os volumes seriam multiplicados por um mesmo fator). Mais precisamente,

²A definição de volume pede cuidados: se está dada em termos de aproximações por cubinhos, então é preciso provar que o volume de um paralelepípedo é a área da base vezes a altura. Aliás... o que é área?