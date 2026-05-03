Capítulo 2

O produto escalar

2.1 Definição

A exemplo do que fizemos no plano, vamos definir o produto escalar de dois vetores $\vec{u}$ e $\vec{v}$ do espaço por

$$<\vec{u},\vec{v}> = \vec{u} \cdot \vec{v} = |\vec{u}| |\vec{v}| \cos \theta,$$

sendo $\theta$ o ângulo entre $\vec{u}$ e $\vec{v}$. Daí concluímos (geometricamente), que o produto escalar tem as propriedades:

(i) $<\vec{u},\vec{v}> = <\vec{v},\vec{u}> \forall \vec{u},\vec{v} \in V$
(ii) $<t\vec{u},\vec{v}> = t <\vec{u},\vec{v}> \forall \vec{u},\vec{v} \in V, \forall t \in \mathbb{R}$
(iii) $<\vec{u},\vec{v}_1 + \vec{v}_2> = <\vec{u},\vec{v}_1> + <\vec{u},\vec{v}_2> \forall \vec{u},\vec{v}_1, \vec{v}_2 \in V$
(iv) $<e_i,e_j> = 0, i \neq j, <e_i,e_j> = 1, i = j$

Quando $<\vec{u},\vec{v}> = 0$, os vetores $\vec{u}$ e $\vec{v}$ são ditos ortogonais.

Segue imediatamente das propriedades que, se os vetores $\vec{u}$ e $\vec{v}$ são dados, na base canônica, por $\vec{u} = u_1\vec{e}_1 + u_2\vec{e}_2 + u_3\vec{e}_3$ e $\vec{v} = v_1\vec{e}_1 + v_2\vec{e}_2 + v_3\vec{e}_3$, então

$$<\vec{u},\vec{v}> = u_1v_1 + u_2v_2 + u_3v_3.$$

Exercício 2.1 Desenvolva $<\vec{u},\vec{v}> = <u_1\vec{e}_1 + u_2\vec{e}_2 + u_3\vec{e}_3, v_1\vec{e}_1 + v_2\vec{e}_2 + v_3\vec{e}_3>$, usando as propriedades (i), (ii), (iii) e (iv), e prove a fórmula acima.

Daí decorrem algumas coisas importantes. Da definição segue que tanto distâncias como ângulos podem ser expressos por meio do produto escalar:

(i) a norma do vetor $\vec{v}$ é dada por $|\vec{v}| = <\vec{v},\vec{v}>^{1/2}$;
(ii) o ângulo $\theta$ entre os vetores não nulos $\vec{u}$ e $\vec{v}$ é dado por

$$\cos \theta = \frac{<\vec{u},\vec{v}>}{|\vec{u}| |\vec{v}|}.$$

Mas, como acabamos de ver, o produto escalar pode ser calculado diretamente a partir das coordenadas dos vetores envolvidos. As duas fórmulas acima permitem, pois,