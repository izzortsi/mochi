7.1 Distâncias e ângulos

Seja $E$ um espaço vetorial real com produto interno. De acordo com nossa experiência no plano e no espaço geométricos, são naturais as definições seguinte.

Definição: Se $u \in E$, a norma de $u$ é definida por

$$|u| = \sqrt{\langle u.u \rangle}.$$

Se $|u| = 1$, $u$ é dito **unitário**.

Exercício 7.8 Seja $v$ um vetor não nulo. Defina $u$ por $u = \frac{1}{|v|}v$. Mostre que $|u| = 1$.

Se $u$ e $v$ são dois pontos de $E$, sua **distância** é dada por $|u - v|.$^1$

Definição: Dados os vetores não nulos $u$ e $v$ em $E$, o ângulo $\theta$ entre $u$ e $v$ é (o menor ângulo positivo) definido por

$$\cos \theta = \frac{\langle u,v \rangle}{|u||v|}.$$

Nossas definições, mesmo que diretamente inspiradas pela Geometria Euclidiana, têm satisfações a nos dar. Por exemplo: será que o número que acabamos de chamar de cosseno está, de fato, no intervalo $[-1,1]$? Precisamos de algumas garantias de que as fantasias geométricas com que pretendemos vestir nossos espaços mundidos de produto interno, embora fantasias, tenham alguma verossimilhança.

Curiosamente, se considerarmos que um ângulo reto entre $u$ e $v$ é equivalente a $\langle u,v \rangle = 0$, o Teorema de Pitágoras é um resultado básico.

Figura 7.1:

$^1$O leitor deve observar que, a exemplo do que fazemos em situações geométricas, costumamos dizer a norma do vetor fulano de tal, mas, quando se trata de distâncias, o usual é a distância entre os pontos tal e tal