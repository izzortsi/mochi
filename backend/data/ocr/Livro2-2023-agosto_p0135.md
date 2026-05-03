para coordenadas na base $\alpha$, pela Proposição, precisamos das coordenadas dos vetores da base canônica na base $\alpha$. Teremos, então, a matriz $(I)_{\beta}^{\alpha}$. Não custa nada observar que, para qualquer vetor $\vec{v}$, teremos

$$(\vec{v})_{\alpha} = (I)_{\beta}^{\alpha}(\vec{v})_{\beta} = (I)_{\beta}^{\alpha}((I)_{\alpha}^{\beta}(\vec{v})_{\alpha}) = ((I)_{\beta}^{\alpha}((I)_{\alpha}^{\beta})(\vec{v})_{\alpha},$$

ou seja: $(I)_{\beta}^{\alpha}$ é a inversa de $(I)_{\alpha}^{\beta}$.

**Exercício 15.5** Como você faria para inverter nossa matriz $\begin{pmatrix} a_1 & a_2 & a \\ b_1 & b_2 & b \\ c_1 & c_2 & c \end{pmatrix}$?

**Exercício 15.6** Mostre que é possível obter, diretamente, a matriz da rotação na base canônica.

Sugestão: dado um vetor $\vec{v}$, comece por projetar $\vec{v}$ sobre o eixo de rotação, obtendo $\vec{v}_e = (\vec{v}, \vec{e})$; tome $\vec{v}_1 = \vec{v} - \vec{v}_e$ e $\vec{v}_2 = \vec{e} \otimes \vec{v}_1$; faça $R\vec{v} = \vec{v}_e + \cos \theta \vec{v}_1 + \sin \theta \vec{v}_2$.

### 15.2 Outros exemplos em $R^3$

**Exemplo 2:** Consideremos um cisalhamento perpendicular ao vetor $\vec{\epsilon}_1$ (que suporemos unitário). Ou seja, planos perpendiculares a $\vec{\epsilon}_1$ deslizam, sobre si mesmos, na direção de um certo vetor $\vec{\epsilon}_2$, normal a $\vec{\epsilon}_1$ (para simplificar, suporemos, também, $\vec{\epsilon}_2$ unitário). O deslizamento é proporcional à altura do plano (medida na direção de $\vec{\epsilon}_1$). Fazendo $\vec{\epsilon}_3 = \vec{\epsilon}_1 \otimes \vec{\epsilon}_2$, podemos definir nosso cisalhamento da seguinte forma:

$$T(y_1\vec{\epsilon}_1 + y_2\vec{\epsilon}_2 + y_3\vec{\epsilon}_3) = y_1\vec{\epsilon}_1 + y_2\vec{\epsilon}_2 + y_3\vec{\epsilon}_3 + ay_1\vec{\epsilon}_2 = y_1\vec{\epsilon}_1 + (y_2 + ay_1)\vec{\epsilon}_2 + y_3\vec{\epsilon}_3$$

(a é um coeficiente fixo, que indica a intensidade do deslizamento).

**Exercício 15.7** Confira que, na base $\alpha = (\vec{\epsilon}_1, \vec{\epsilon}_2, \vec{\epsilon}_3)$, a matriz da nossa transformação é

$$\begin{pmatrix} 1 & 0 & 0 \\ a & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$

**Exercício 15.8** Suponha conheidas as coordenadas, na base canônica, de $\vec{\epsilon}_1$ e $\vec{\epsilon}_2$. Determine a matriz de $T$ na base canônica.

**Exercício 15.9** Observe que poderíamos também ter definido $T$, diretamente, por $T\vec{v} = \vec{v} + a \langle \vec{v}, \vec{\epsilon}_1 \rangle \vec{\epsilon}_2$.

**Exemplo 3:** Nossa transformação, agora, é a **projeção ortogonal sobre um plano** que passa pela origem. O plano, como de hábito, pode ser dado por um vetor normal $\vec{n}$, que suporemos unitário. Tomando, no plano, dois vetores unitários e ortogonais, $\vec{\epsilon}_1$ e $\vec{\epsilon}_2$, teremos, fazendo $\vec{\epsilon}_3 = \vec{n}$, uma base ortonormal $\alpha = (\vec{\epsilon}_1, \vec{\epsilon}_2, \vec{\epsilon}_3)$. A matriz da projeção, nessa base, será, então,

$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$