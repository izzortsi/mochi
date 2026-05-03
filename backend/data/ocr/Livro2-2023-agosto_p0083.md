10.3: Áreas com sinal

Exercício 10.2 Considere o vetor $\vec{u} = (x, y)$ identificado com o ponto $P = (x, y)$. Considere a reta OP, coloque-se sobre a origem e olhe para $P$. Verifique que o par $\vec{u}, \vec{v}$ tem orientação positiva se e só se o ponto correspondente a $\vec{v}$ está à sua esquerda.

Exercício 10.3 Mostre que $\vec{u}, \vec{v}$ e $\vec{u}, \vec{v} + t\vec{u}$ têm a mesma orientação, qualquer que seja $t$.

Exercício 10.4 Suponha que $\vec{u}, \vec{v}$ tem orientação positiva. Gire $\vec{u}$ de um ângulo reto no sentido trigonométrico, obtendo o vetor $\vec{u}^\perp$. Mostre que o produto escalar

$$\langle \vec{u}^\perp, \vec{v} \rangle$$

é positivo.

Exercício 10.5 Sejam $\vec{u} = (a_{11}, a_{21})$ e $\vec{v} = (a_{12}, a_{22})$. Use a observação do exercício anterior para mostrar que $\vec{u}, \vec{v}$ tem orientação positiva se, e somente se,

$$a_{11}a_{22} - a_{21}a_{12} > 0.$$

10.3 Áreas com sinal

Vamos agora definir uma função $d$, que a cada par (ordenado) de vetores $\vec{u}, \vec{v}$ associa a área do paralelogramo por eles formado.

Fica entendido que se $\vec{u}$ e $\vec{v}$ são paralelos (o que inclui a possibilidade de um dos dois ser nulo, ou ambos), então $d(\vec{u}, \vec{v}) = 0$. Incluiremos na definição de $d$, porém, uma novidade, que a distingue do que comumente chamamos área: $d(\vec{u}, \vec{v})$ será a área do paralelogramo formado por $\vec{u}$ e $\vec{v}$, mas com um sinal, positivo, se o par $\vec{u}, \vec{v}$ tiver orientação positiva, e negativo, se a orientação de $\vec{u}, \vec{v}$ for negativa. É claro que o leitor não é obrigado a aceitar áreas negativas assim à toa, e daremos boas razões algébricas para a ousadia.

A primeira razão algébrica é a seguinte: se $t$ é positivo, a área do paralelogramo formado por $t\vec{u}$ e $\vec{v}$ é $t$ vezes a do paralelogramo formado por $\vec{u}$ e $\vec{v}$, o que nos leva a conjecturar que

$$d(t\vec{u}, \vec{v}) = td(\vec{u}, \vec{v}).$$

Mas na verdade isso não pode valer para $t$ negativo, a menos que admitamos valores negativos para $d$ ou que modifiquemos um pouco a fórmula acima. Podemos ainda notar que o problema que surge diz respeito apenas ao sinal. Ora, se $d$ troca de sinal quando trocamos a orientação, então a definição que demos está boa, pois $t$ negativo troca o sinal dos dois lados da igualdade.

O leitor argumentará, talvez, que bastaria escrever $d(t\vec{u}, \vec{v}) = |t|d(\vec{u}, \vec{v})$. Poderíamos contra-argumentar dizendo que trabalhar com $|t|$ é chatíssimo, mas preferimos lançarão de nossa segunda razão algébrica, que é um verdadeiro canhão.