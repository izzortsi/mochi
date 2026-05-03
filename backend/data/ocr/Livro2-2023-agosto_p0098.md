A demonstração é uma simples conta, mas fica mais sugestiva se observarmos que, se $\vec{u} = x_1i + y_1j + z_1k$, $\vec{v} = x_2i + y_2j + z_2k$ e $\vec{w} = xi + yj + zk$, então

$$<\vec{w}, \vec{u} \otimes \vec{v} > = \begin{vmatrix} x & y & z \\ x_1 & y_1 & z_1 \\ x_2 & y_2 & z_2 \end{vmatrix}.$$

Exercício 11.8 Conclua, da identidade acima, que

$$0 \leq <\vec{u} \otimes \vec{v}, \vec{u} \otimes \vec{v} > = \det(\vec{u} \otimes \vec{v}, \vec{u}, \vec{v}).$$

Assim, como $\vec{u} \otimes \vec{v} = \vec{0}$ se e somente se $\vec{u}$ e $\vec{v}$ são linearmente dependentes, temos que, se $\vec{u}$ e $\vec{v}$ são linearmente independentes, então $det(\vec{u} \otimes \vec{v}, \vec{u}, \vec{v}) > 0$ e, portanto, $(\vec{u} \otimes \vec{v}, \vec{u}, \vec{v})$ é uma base ordenada para $V$, com a mesma orientação que a base canônica.

Cuidemos, agora, de uma propriedade menos evidente: o comprimento (norma) de $\vec{u} \otimes \vec{v}$ é igual à área do paralelogramo formado por $\vec{u}$ e $\vec{v}$. Ou seja: se $\theta$ é o ângulo entre $\vec{u}$ e $\vec{v}$, então

$$|\vec{u} \otimes \vec{v}| = |\vec{u}| |\vec{v}| \sin \theta.$$

A demonstração lançará mão de dois resultados geométricos que enunciamos e demonstramos a seguir.

Proposição: Sejam $\alpha$ e $\beta$ planos que se cortam segundo o ângulo $\theta$. Se $F$ é uma figura em $\beta$ e $F$ sua projeção ortogonal sobre $\alpha$, então

$$\text{áreade}F = \cos \theta \text{áreade}F.$$

Demonstração: Podemos desconsiderar os casos $\theta = 0$ e $\theta = \pi/2$, em que o resultado é evidente. Chamemos de $r$ a reta interseção entre $\alpha$ e $\beta$.

Para obter a área de $F$, ladrilhemos o plano $\beta$ com retângulos de lados paralelos ou perpendiculares a $r$. Projetando-os ortogonalmente a $\alpha$, obtemos um ladrilhamento de $\alpha$ com retângulos também de lados paralelos ou perpendiculares a $r$. Mas se $R$ é um dos ladrilhos de $\beta$ e $R$ é sua projeção em $\alpha$, o lado de $R$ paralelo a $r$ tem seu comprimento preservado pela projeção, enquanto o lado perpendicular a $r$, ao ser projetado, tem seu comprimento multiplicado por $\cos \theta$. Logo, a área de $R$ é igual à de $R$ multiplicada por $\cos \theta$. Fazendo aproximações por dentro e por fora de $F$ com ladrilhos como acima e observando as correspondentes aproximações de $F$, obtemos o resultado por passagem ao limite.

O segundo resultado é uma interessante generalização do Teorema de Pitágoras.

Teorema: Considere um sistema de três planos, $\alpha_1, \alpha_2$ e $\alpha_3$, dois a dois ortogonais. Dados um quarto plano $\beta$ e uma figura $F$ em $\beta$, sejam $F_1, F_2$ e $F_3$ as projeções ortogonais de $F$ sobre, respectivamente, $\alpha_1, \alpha_2$ e $\alpha_3$. Então as áreas das figuras, dadas por $|F|, |F_1|, |F_2|$ e $|F_3|$, satisfazem a relação: