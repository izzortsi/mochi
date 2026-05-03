Por conta da propriedade (ii), o determinante é uma aplicação trilinear (ou forma trilinear, neste caso). Por conta da propriedade a ser provada no exercício a seguir, o determinante é uma forma trilinear alternada.

Exercício 10.9 Dedique o tempo que achar necessário a ver se acredita mesmo que o as propriedades acima caracterizam o volume (com sinal) do paralelepípedo $p$.³

Exercício 10.10 Mostre que, das propriedades (i) e (ii) acima, decorre que o sinal de det muda, se trocarmos a ordem de dois dos vetores.

Solução: para a troca, por exemplo, de $\vec{u}$ e $\vec{w}$, começamos observando que $0 = \det(\vec{u} + \vec{w}, \vec{u} + \vec{w}) = \det(\vec{u}, \vec{w}) + \det(\vec{u}, \vec{w}) + \det(\vec{w}, \vec{w}) + \det(\vec{w}, \vec{w}) + \det(\vec{w}, \vec{w}) + \det(\vec{w}, \vec{w}) + \det(\vec{w}, \vec{w}) + \det(\vec{w}, \vec{w}) + \det(\vec{w}, \vec{w}) + \det(\vec{w}, \vec{w})$.

Definição: Uma forma trilinear alternada em $\mathbf{V}$ é uma aplicação $\omega : \mathbf{V} \times \mathbf{V} \times \mathbf{V} \rightarrow \mathbb{R}$ tal que:

(i) $\omega(\vec{u}, \vec{v}, \vec{w}) = 0$, se $\vec{u}, \vec{v}$ e $\vec{w}$ são linearmente dependentes
(ii) $\omega(\vec{u}_1 + t\vec{u}_2, \vec{v}, \vec{w}) = \omega(\vec{u}_1, \vec{v}, \vec{w}) + t \omega(\vec{u}_2, \vec{v}, \vec{w}) \forall t, \vec{u}_1, \vec{u}_2, \vec{v}, \vec{w}$
$\omega(\vec{u}, \vec{v}_1 + t\vec{v}_2, \vec{w}) = \omega(\vec{u}, \vec{v}_1, \vec{w}) + t \omega(\vec{u}, \vec{v}_2, \vec{w}) \forall t, \vec{u}, \vec{v}_1, \vec{v}_2, \vec{w}$
$\omega(\vec{u}, \vec{v}, \vec{w}_1 + t\vec{w}_2) = \omega(\vec{u}, \vec{v}, \vec{w}_1) + t (\vec{u}, \vec{v}, \vec{w}_2) \forall t, \vec{u}, \vec{v}, \vec{w}_1, \vec{w}_2$

10.5 A fórmula

Não é difícil ver que, a exemplo do que ocorre no plano, as propriedades (i), (ii) e (iii) determinam, para cada terno $(\vec{u}, \vec{v}, \vec{w})$, um único número $det(\vec{u}, \vec{v}, \vec{w})$, que pode ser calculado em termos das coordenadas de $\vec{u}, \vec{v}$ e $\vec{w}$ na base canônica.

Proposição: Suponhamos que os vetores $\vec{u}, \vec{v}$ e $\vec{w}$ sejam dados, na base canônica, por

$$\vec{u} = a_{11}\vec{e}_1 + a_{21}\vec{e}_2 + a_{31}\vec{e}_3$$
$$\vec{v} = a_{12}\vec{e}_1 + a_{22}\vec{e}_2 + a_{32}\vec{e}_3$$
$$\vec{w} = a_{13}\vec{e}_1 + a_{23}\vec{e}_2 + a_{33}\vec{e}_3.$$

Então, das propriedades (i), (ii) e (iii) decorre:

$$det(\vec{u}, \vec{v}, \vec{w}) = a_{11}a_{22}a_{33} - a_{11}a_{23}a_{32} + a_{12}a_{21}a_{33} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31}.$$

Demonstração: É um simples exercício. Basta escrever

$$det(\vec{u}, \vec{v}, \vec{w}) = det(a_{11}\vec{e}_1 + a_{21}\vec{e}_2 + a_{31}\vec{e}_3, a_{12}\vec{e}_1 + a_{22}\vec{e}_2 + a_{32}\vec{e}_3, a_{13}\vec{e}_1 + a_{23}\vec{e}_2 + a_{33}\vec{e}_3)$$

³Historicamente, o determinante (restrito ao caso $2 \times 2$) aparece no Ars Magna, de Cardano, no século XVI, associado à solução de sistemas de equações lineares; o caso geral só será devidamente estudado cerca de duzentos anos depois. Sua interpretação geométrica, em termos de áreas e volumes, vem apenas na segunda metade do século XVIII, com Lagrange. Voltaremos à relação entre determinantes e volumes no final do capítulo sobre o produto vetorial.