$$\vec{u}_1 = (y_1, z_1) \quad \vec{u}_2 = (z_1, x_1) \quad \vec{u}_3 = (x_1, y_1)
\vec{v}_1 = (y_2, z_2) \quad \vec{v}_2 = (z_2, x_2) \quad \vec{v}_3 = (x_2, y_2)

Chamando de $F_i$ a projeção ortogonal de $F$ sobre $\alpha_i$, temos que $F_i$ é o paralelogramo formado por $\vec{u}_i$ e $\vec{v}_i$. Ora, pelo que aprendemos sobre determinantes de matrizes $2 \times 2$, a área de $F_i$ é o módulo do determinante de $\vec{u}_i$ e $\vec{v}_i$, e esse determinante é a $i$-ésima coordenada de $\vec{u} \otimes \vec{v}$, ou seja:

$$\vec{u} \otimes \vec{v} = (y_1 z_2 - z_1 y_2) \vec{e}_1 + (z_1 x_2 - x_1 z_2) \vec{e}_2 + (x_1 y_2 - y_1 x_2) \vec{e}_3,$$

e

$$|F_1| = |y_1 z_2 - z_1 y_2|,
|F_1| = |z_1 x_2 - x_1 z_2|,
|F_1| = |x_1 y_2 - y_1 x_2|$$

Aplicando o teorema, temos imediatamente

$$|F|^2 = |F_1|^2 + |F_2|^2 + |F_3|^2 = |\vec{u} \otimes \vec{v}|^2,$$

o que completa a prova

11.4 Determinantes e volume, de novo

No capítulo referente ao determinante, usamos, como ponto de partida, a busca de algo que correspondesse ao volume do paralelepídedo $p$ gerado pelos vetores $\vec{u}, \vec{v}$ e $\vec{w}$. Naquela ocasião, demos como óbvio que o volume com sinal deveria ser uma forma trilinear alternada em $\vec{u}, \vec{v}$ e $\vec{w}$. O leitor, com razão, pode não ter achado tão óbvio assim. Voltemos, pois, ao assunto, agora fortalecidos por nossos conhecimentos sobre o produto vetorial. Como já sabemos que a área do paralelogramo formado por $\vec{v}$ e $\vec{w}$ é a norma de $\vec{v} \otimes \vec{w}$, podemos obter o volume de $p$ multiplicando $|\vec{v} \otimes \vec{w}|$ pela projeção de $\vec{u}$ na direção normal ao plano $\alpha$ gerado por $\vec{v}$ e $\vec{w}$.

Ora, como já vimos, $\vec{v} \otimes \vec{w}$ é normal ao plano $\alpha$. Basta, pois, tomar

$$< \vec{u}, \vec{v} \otimes \vec{w} >,$$

observando que o sinal será positivo se $\vec{u}$ e $\vec{v} \otimes \vec{w}$ estiverem do mesmo lado do plano $\alpha$, negativo se estiverem em lados opostos. Ora, é fácil ver que, no primeiro caso, a base $(\vec{u}, \vec{v}, \vec{w})$ tem orientação positiva e, no segundo, tem orientação negativa. Também é claro que o volume de $p$, dado por $\vec{u} \cdot \vec{v} \otimes \vec{w}$ (que costuma ser chamado de **produto misto** de $\vec{u}$ e $\vec{v} \otimes \vec{w}$), é dado, se $\vec{u} = (x_1, y_1, z_1), \vec{v} = (x_2, y_2, z_2)$ e $\vec{w} = (x_3, y_3, z_3)$, pelo determinante

$$^5\text{óbvio, pelo menos, a partir de nossa experiência com o determinante de dois vetores, no plano}$$