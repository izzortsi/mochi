Capítulo 4

OPERADORES
LINEARES

4.1 – OPERADORES LINEARES

No Capítulo anterior se viu que as transformações lineares de um espaço vetorial V em si mesmo, isto é, $f : V \rightarrow V$, são chamadas operadores lineares sobre V.

As propriedades gerais das transformações lineares de V em W e das correspondentes matrizes retangulares são válidas para os operadores lineares. Estes e as correspondentes matrizes quadradas possuem, entretanto, propriedades particulares, que serão estudadas neste capítulo.

- Tendo em vista aplicações em Geometria Analítica, serão estudados, de preferência, operadores lineares em $\mathbb{R}^2$ e $\mathbb{R}^3$.

- As transformações lineares planas do capítulo anterior são todas operadores lineares no $\mathbb{R}^2$. Ao apresentá-las, teve-se como objetivos principais mostrar suas matrizes canônicas, a correspondente interpretação geométrica e a composição de transformações. Estas são as razões de o referido assunto ter aparecido no Capítulo 3.

4.2 – OPERADORES INVERSÍVEIS

Um operador $f: V \rightarrow V$ associa a cada vetor $v \in V$ um vetor $f(v) \in V$. Se por meio de outro operador $g$ for possível inverter essa correspondência, de tal modo que a cada vetor transformado $f(v)$ se associe o vetor de partida $v$, diz-se que $g$ é operador inverso de $f$ e se indica por $f^{-1}$. Nesse caso $f^{-1}(f(v)) = v$ (Fig. 4.2).

Figura 4.2

Quando o operador linear $f$ admite o inverso $f^{-1}$, diz-se que $f$ é inversível, ou regular ou não-singular.

4.2.1 – Propriedades dos Operadores Inversíveis

Da definição e do fato de que a cada operador linear corresponde uma matriz, decorrem as seguintes propriedades:

I) Se $f$ é inversível e $f^{-1}$ o seu inverso, tem-se
$$f \circ f^{-1} = f^{-1} \circ f = I$$ (identidade)

II) Se $f$ é linear inversível, $f^{-1}$ também é linear.

III) A matriz $B$ de $f^{-1}$ numa certa base (na prática será sempre considerada a base canônica) é a inversa da matriz $T$ de $f$ na mesma base, isto é, $B = T^{-1}$.

Como consequência da propriedade III, tem-se: $f$ é inversível se, e somente se, det $T \neq 0$, fato esse que será utilizado “preferencialmente” para verificar se $f$ é inversível.

4.2.2 – Problema Resolvido

1) Dado o operador linear $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ definido por

$$f(x, y) = (4x - 3y, -2x + 2y),$$

a) mostrar que $f$ é inversível;

b) determinar uma regra que defina $f^{-1}$.

Solução

a) A matriz canônica de $f$ é

$$T = \begin{bmatrix} 4 & -3 \\ -2 & 2 \end{bmatrix} \text{ e det } T = \begin{bmatrix} 4 & -3 \\ -2 & 2 \end{bmatrix} = 8 - 6 = 2 \neq 0$$

Como det $T \neq 0, f$ é inversível.

b) A matriz $T^{-1}$, inversa de $T$, é:

$$T^{-1} = \begin{bmatrix} \frac{2}{2} & \frac{3}{2} \\ \frac{2}{2} & \frac{4}{2} \end{bmatrix} = \begin{bmatrix} 1 & \frac{3}{2} \\ 1 & 2 \end{bmatrix}$$

logo,

$$f^{-1}(x, y) = T^{-1} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 & \frac{3}{2} \\ 1 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} x + \frac{3}{2}y \\ x + 2y \end{bmatrix}$$

ou

$$f^{-1}(x, y) = \left(x + \frac{3}{2} y, x + 2y\right)$$

• Deve ser entendido que se $f$ leva o vetor $(x, y)$ ao vetor $(x', y')$, isto é,

$$\begin{bmatrix} x' \\ y' \end{bmatrix} = T \begin{bmatrix} x \\ y \end{bmatrix},$$

o operador $f^{-1}$ traz de volta o vetor $(x', y')$ para a posição inicial $(x, y)$, ou seja,

$$\begin{bmatrix} x \\ y \end{bmatrix} = T^{-1} \begin{bmatrix} x' \\ y' \end{bmatrix}$$

Assim, neste problema, se $v = (x, y) = (2, 1)$:

$$\begin{bmatrix} x' \\ y' \end{bmatrix} = T \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 4 & -3 \\ -2 & 2 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 5 \\ -2 \end{bmatrix}$$

e

$$\begin{bmatrix} x \\ y \end{bmatrix} = T^{-1} \begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 1 & \frac{3}{2} \\ 1 & 2 \end{bmatrix} \begin{bmatrix} 5 \\ -2 \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$$

• As transformações lineares planas vistas no Capítulo 3 são todas operadores lineares inversíveis. Fica a cargo do leitor verificar que o inverso de uma reflexão em relação a uma reta é uma reflexão em relação à mesma reta, o inverso de uma dilatação é uma contração, etc.

4.3 – MATRIZES SEMELHANTES

Seja $f: V \rightarrow V$ um operador linear. Se A e B são bases de $V$ e $T_A$ e $T_B$ as matrizes que representam o operador $f$ nas bases A e B, respectivamente, então

$$T_B = Q^{-1} T_A Q,$$

(1)

sendo Q a matriz de mudança de base de B para A. De fato:

Pela definição de matriz de uma transformação linear, pode-se escrever

$$f(v)_A = T_A v_A$$

(2)

$$f(v)_B = T_B v_B$$

(3)

Designando-se por Q a matriz de mudança de base de B para A, tem-se:

$$v_A = Q v_B$$

(4)

$$f(v)_A = Q f(v)_B$$

(5)

Substituindo (4) e (5) em (2), vem:

$$Qf(v)_B = T_A Q v_B$$

Como a matriz Q é inversível, pode-se escrever:

$$Q^{-1} Qf(v)_B = Q^{-1} T_A Q v_B$$

ou

$$f(v)_B = Q^{-1} T_A Q v_B,$$

(6)

uma vez que $Q^{-1} Q = I$. Comparando (6) com (3), vem:

$$T_B = Q^{-1} T_A Q$$

que é a relação apresentada em (1).

É preciso que o leitor atente para o fato de que, na relação (1), a matriz Q é a matriz de mudança de base de B para A (da 2ª base para a 1ª).

As matrizes $T_A$ e $T_B$ são chamadas *matrizes semelhantes*.

Por conseguinte, duas matrizes são semelhantes quando definem, em V, um mesmo operador linear $f$, em duas bases diferentes. Mais precisamente, duas matrizes $T_A$ e $T_B$ são semelhantes se existe uma matriz inversível Q tal que

$$T_B = Q^{-1} T_A Q$$

4.3.1 – Propriedade de Matrizes Semelhantes

Matrizes semelhantes possuem o mesmo determinante. De fato, de

$$T_B = Q^{-1} T_A Q,$$

vem

$$QT_B = QQ^{-1} T_A Q$$

ou

$$QT_B = T_A Q$$

e

$$\det Q \times \det T_B = \det T_A \times \det Q$$

ou

$$\det T_B = \det T_A.$$

4.3.2 – Problemas Resolvidos

1) Sejam $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ um operador linear e as bases $A = \{(3, 4), (5, 7)\}$ e $B = \{(1, 1), (-1, 1)\}$.

Sabendo que

$$T_A = \begin{bmatrix} -2 & 4 \\ 2 & -1 \end{bmatrix},$$

calcular $T_B$ utilizando a relação $T_B = Q^{-1} T_A Q$.

Solução

As bases $A e B$, como se sabe, podem ser representadas, respectivamente, pelas matrizes

$$A = \begin{bmatrix} 3 & 5 \\ 4 & 7 \end{bmatrix} \quad e \quad B = \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}.$$

Tendo em vista que $Q$ é a matriz de mudança de base de $B$ para $A$, pode-se escrever:

$$Q = A^{-1} B$$

mas,

$$A^{-1} = \begin{bmatrix} 7 & -5 \\ -4 & 3 \end{bmatrix},$$

portanto,

$$Q = \begin{bmatrix} 7 & -5 \\ -4 & 3 \end{bmatrix} \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 2 & -12 \\ -1 & 7 \end{bmatrix}$$

e

$$Q^{-1} = \begin{bmatrix} \frac{7}{2} & \frac{12}{2} \\ \frac{1}{2} & \frac{2}{2} \end{bmatrix} = \begin{bmatrix} \frac{7}{2} & 6 \\ \frac{1}{2} & 1 \end{bmatrix}$$

logo,

$$T_B = \begin{bmatrix} \frac{7}{2} & 6 \\ \frac{1}{2} & 1 \end{bmatrix} \begin{bmatrix} -2 & 4 \\ 2 & -1 \end{bmatrix} \begin{bmatrix} 2 & -12 \\ -1 & 7 \end{bmatrix} =$$

$$= \begin{bmatrix} 5 & 8 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 2 & -12 \\ -1 & 7 \end{bmatrix} = \begin{bmatrix} 2 & -4 \\ 1 & -5 \end{bmatrix}$$

● Observe o leitor que det $T_A = \det T_B = -6$

2) Dado o operador linear $f: \mathbb{R}^2 \to \mathbb{R}^2, f(x,y) = (2x + 9y, x + 2y)$, determinar $T$, matriz canônica de $f$, e, a seguir, utilizando a relação entre matrizes semelhantes, calcular a matriz de $f$ na base $B = \{(3, 1), (-3, 1)\}$.

Solução

a) É imediato que a matriz canônica de $f$ é

$$T = \begin{bmatrix} 2 & 9 \\ 1 & 2 \end{bmatrix}$$

b) A matriz $Q$ de mudança de base de $B$ para a base canônica $A$ é dada por

$$Q = A^{-1}B = I^{-1}B = IB = B = \begin{bmatrix} 3 & -3 \\ 1 & 1 \end{bmatrix}$$

e

$$Q^{-1} = \begin{bmatrix} \frac{1}{6} & \frac{3}{6} \\ -\frac{1}{6} & \frac{3}{6} \end{bmatrix}$$

logo,

$$T_B = Q^{-1}TQ = \begin{bmatrix} \frac{1}{6} & \frac{3}{6} \\ -\frac{1}{6} & \frac{3}{6} \end{bmatrix} \begin{bmatrix} 2 & 9 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} 3 & -3 \\ 1 & 1 \end{bmatrix} =$$

$$= \begin{bmatrix} \frac{5}{6} & \frac{15}{6} \\ \frac{1}{6} & -\frac{3}{6} \end{bmatrix} \begin{bmatrix} 3 & -3 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 5 & 0 \\ 0 & -1 \end{bmatrix}$$

● É interessante desde já observar que a matriz diagonal $T_B$ que representa $f$ na base $B$ é mais simples, no sentido de “estrutura” do que a matriz canônica $T$, fato este que não ocorreu no problema anterior com as matrizes $T_A$ e $T_B$. A simplificação da matriz de um operador $f$ está ligada à escolha adequada de uma base, pois é a matriz de mudança de base $Q$ que atua sobre a matriz de um operador linear para transformá-la em outra matriz do mesmo operador. A escolha de uma base “certa”, que torna a matriz de um operador $f$ mais simples possível, será objeto de estudo no próximo capítulo.

4.4 – OPERADOR ORTOGONAL

Um operador linear $f: V \rightarrow V$ é ortogonal se preserva o módulo de cada vetor, isto é, se para qualquer $v \in V$:

$$|f(v)| = |v|.$$

Tendo em vista que o módulo de um vetor é calculado por meio de um produto interno $(|v| = \sqrt{v \cdot v})$, os operadores ortogonais são definidos nos espaços vetoriais euclidianos.

- No estudo dos operadores ortogonais, serão consideradas somente bases ortonormais em $V$, particularmente, a base canônica.

- É fundamental que, sendo $\alpha$ uma base ortonormal de $V$, o produto interno de dois vetores quaisquer de $V$, nessa base, é sempre o usual. Isso será demonstrado para o caso de dim $V = 2$, uma vez que o caso de dim $V = n$ é similar.

Sejam $\alpha = \{\mu_1, \mu_2\}$ uma base ortonormal de $V$ e $\mu e v$ vetores quaisquer de $V$, sendo

$$\mu = a_1\mu_1 + a_2\mu_2 \quad \text{ou} \quad \mu_\alpha = (a_1, a_2)$$

$$v = b_1\mu_1 + b_2\mu_2 \quad \text{ou} \quad v_\alpha = (b_1, b_2)$$

O produto interno dos vetores $\mu e v$ é

$$\mu \cdot v = (a_1\mu_1 + a_2\mu_2) \cdot (b_1\mu_1 + b_2\mu_2)$$

$$= a_1\mu_1 \cdot (b_1\mu_1 + b_2\mu_2) + a_2\mu_2 \cdot (b_1\mu_1 + b_2\mu_2)$$

$$= a_1b_1(\mu_1 \cdot \mu_1) + a_1b_2(\mu_1 \cdot \mu_2) + a_2b_1(\mu_2 \cdot \mu_1) + a_2b_2(\mu_2 \cdot \mu_2)$$

Como $\alpha$ é ortonormal, isto é:

$$\mu_i \cdot \mu_j = \begin{cases} 1 \text{ se } i = j \\ 0 \text{ se } i \neq j \end{cases}$$

tem-se

$$\mu \cdot v = a_1 b_1 + a_2 b_2$$

● Representando $\mu$ e $v$ na forma matricial, isto é,

$$\mu = \begin{bmatrix} a_1 \\ a_2 \end{bmatrix} \quad e \quad v = \begin{bmatrix} b_1 \\ b_2 \end{bmatrix},$$

pode-se escrever

$$\mu \cdot v = \mu^t v,$$

(1)

isto é,

$$\mu \cdot v = [a_1 \quad a_2] \begin{bmatrix} b_1 \\ b_2 \end{bmatrix} = a_1 b_1 + a_2 b_2.$$

Na notação (1), está-se identificando a matriz $\mu^t v$, de ordem 1, com o número $\mu \cdot v$, o que será utilizado em futuras demonstrações.

Exemplos

1) No $\mathbb{R}^2$, o operador linear definido por

$$f(x,y) = \left(\frac{4}{5}x - \frac{3}{5}y, \frac{3}{5}x + \frac{4}{5}y\right)$$

é ortogonal. De fato:

$$|f(x,y)| = \sqrt{\left(\frac{4}{5}x - \frac{3}{5}y\right)^2 + \left(\frac{3}{5}x + \frac{4}{5}y\right)^2}$$

$$= \sqrt{\frac{16}{25}x^2 - \frac{24}{25}xy + \frac{9}{25}y^2 + \frac{9}{25}x^2 + \frac{24}{25}xy + \frac{16}{25}y^2}$$

$$= \sqrt{\frac{25}{25}x^2 + \frac{25}{25}y^2}$$

$$= \sqrt{x^2 + y^2}$$

$$= |(x,y)|, \forall (x,y) \in \mathbb{R}^2$$

2) A rotação do plano de um ângulo $\theta$ definida por

$$f(x, y) = (x \cos \theta - y \sin \theta, x \sin \theta + y \cos \theta),$$

é ortogonal. De fato:

$$|f(x, y)| = \sqrt{(x \cos \theta - y \sin \theta)^2 + (x \sin \theta + y \cos \theta)^2}$$

Desenvolvendo o radicando e simplificando:

$$|f(x, y)| = \sqrt{(x^2 + y^2) \cos^2 \theta + (x^2 + y^2) \sin^2 \theta}$$

$$= \sqrt{(x^2 + y^2) (\cos^2 \theta + \sin^2 \theta)}$$

$$= \sqrt{x^2 + y^2}$$

$$= |(x, y)|, \forall (x, y) \in \mathbb{R}^2$$

3) No $\mathbb{R}^3$, o operador linear definido por

$$f(x, y, z) = (-y, x, -z),$$

é ortogonal. De fato:

$$|f(x, y, z)| = \sqrt{(-y)^2 + x^2 + (-z)^2}$$

$$= \sqrt{x^2 + y^2 + z^2} = |(x, y, z)|$$

4.4.1 – Propriedades dos Operadores Ortogonais

I) Se $f: V \rightarrow V$ é um operador ortogonal e A a matriz de $f$ numa base ortonormal qualquer, isto é, $f(v) = Av$, A é uma matriz ortogonal, ou seja, $A^t = A^{-1}$. De fato, como $f$ é ortogonal, tem-se:

$$|f(v)| = |v|$$

ou

$$|Av| = |v|$$

ou, ainda

$$\sqrt{Av \cdot Av} = \sqrt{v \cdot v}$$

$$Av \cdot Av = v \cdot v$$

isto é,

$$(Av)^t Av = v^t v$$

$$(v^t A^t) Av = v^t v$$

ou

$$v^t (A^t A) v = v^t v$$

o que implica

$$A^t A = I \therefore A^t = A^{-1}$$.

Assim, uma matriz ortogonal é uma matriz que representa um operador ortogonal numa base ortonormal.

Exemplos

1) A matriz canônica A do exemplo 1 do item 4.4 é ortogonal, pois

$$A = \begin{bmatrix}
\frac{4}{5} & -\frac{3}{5} \\
\frac{3}{5} & \frac{4}{5}
\end{bmatrix}$$

$$\therefore A^t = \begin{bmatrix}
\frac{4}{5} & \frac{3}{5} \\
-\frac{3}{5} & \frac{4}{5}
\end{bmatrix} = A^{-1}$$

2) A matriz canônica A do Exemplo 2 do item 4.4 é ortogonal, pois

$$A = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix} \quad \therefore A^t = \begin{bmatrix} \cos \theta & \cos \theta \\ -\sin \theta & \cos \theta \end{bmatrix} = A^{-1},$$

(ver Apêndice, Probl. 3, A. 29.1.1)

II) As colunas (ou linhas) de uma matriz ortogonal são vetores ortonormais. Seja uma matriz ortogonal de ordem 2:

$$A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}$$

Pretende-se provar que os vetores-coluna

$$\mu_1 = \begin{bmatrix} a_{11} \\ a_{21} \end{bmatrix} \text{ e } \mu_2 = \begin{bmatrix} a_{12} \\ a_{22} \end{bmatrix}$$

são ortonormais. Calculando $A^t A$, tem-se:

$$A^t A = \begin{bmatrix} a_{11} & a_{21} \\ a_{12} & a_{22} \end{bmatrix} \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix} = \begin{bmatrix} a_{11} a_{11} + a_{21} a_{21} & a_{11} a_{12} + a_{21} a_{22} \\ a_{12} a_{11} + a_{22} a_{21} & a_{12} a_{12} + a_{22} a_{22} \end{bmatrix}$$

$$= \begin{bmatrix} \mu_1 \cdot \mu_1 & \mu_1 \cdot \mu_2 \\ \mu_2 \cdot \mu_1 & \mu_2 \cdot \mu_2 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

Tendo em vista que $\mu_i \cdot \mu_j = \begin{cases} 1 \text{ para } i = j \\ 0 \text{ para } i \neq j, \end{cases}$

os vetores $\mu_1 \text{ e } \mu_2$ são ortonormais

Estes vetores formam, consequüentemente, uma base ortonormal do espaço vetorial correspondente. Por outro lado, os vetores-coluna de uma base ortonormal determinam uma matriz ortogonal.

Exemplo – A matriz

$$A = \begin{bmatrix}
-\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
0 & 0 & 1 \\
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0
\end{bmatrix}$$

é ortogonal, pois para os vetores

$$\mu_1 = \left( -\frac{1}{\sqrt{2}}, 0, \frac{1}{\sqrt{2}} \right), \mu_2 = \left( \frac{1}{\sqrt{2}}, 0, \frac{1}{\sqrt{2}} \right) \text{ e } \mu_3 = (0, 1, 0), \text{ tem-se:}$$
$$\mu_1 \cdot \mu_1 = \mu_2 \cdot \mu_2 = \mu_3 \cdot \mu_3 = 1$$
$$\mu_1 \cdot \mu_2 = \mu_1 \cdot \mu_3 = \mu_2 \cdot \mu_3 = 0$$

● A demonstração da propriedade II) para uma matriz ortogonal de ordem n é análoga.

III) O produto de duas matrizes ortogonais é uma matriz ortogonal.

IV) Num espaço vetorial euclidiano, a matriz de mudança de uma base ortonormal para outra base ortonormal é uma matriz ortogonal.

V) A matriz, numa base ortonormal, de um operador ortogonal $f: V \rightarrow V$ é sempre ortogonal, independente da base ortonormal do espaço vetorial $V$.

VI) Todo operador ortogonal $f: V \rightarrow V$ preserva o produto interno dos vetores. De fato, se $\mu$ e $v$ são dois vetores quaisquer de $V$ e $A$ a matriz que representa o operador $f$, tem-se:

$$f(\mu) \cdot f(v) = (A\mu) \cdot (Av)$$
$$= (A\mu)^t (Av)$$
$$= (\mu^t A^t) Av$$
$$= \mu^t (A^t A) v$$
$$= \mu^t v = \mu \cdot v.$$

● Decorre dessa propriedade que todo operador ortogonal $f: V \rightarrow V$ preserva o ângulo de dois vetores, isto é, o ângulo entre dois vetores $\mu$ e $v$ é igual ao ângulo entre $f(\mu)$ e $f(v)$.

● Fica a cargo do leitor, a título de exercício, provar as propriedades III, IV e V.

VII) Se A é uma matriz ortogonal, det $A = \pm 1$. De fato, como A é ortogonal,

$$A^t A = I$$

logo,

det $(A^t A) = \det I$$

ou

$$(\det A^t) \times (\det A) = 1$$

mas,

det $A^t = \det A$,

portanto,

$$(\det A)^2 = 1$$

e

det $A = \pm 1$.

● Decorre dessa propriedade que todo operador ortogonal é inversível.

4.5 – OPERADOR SIMÉTRICO

Diz-se que um operador linear $f: \mathbb{V} \rightarrow \mathbb{V}$ é simétrico se a matriz A que o representa numa base ortonormal é simétrica, isto é, se

$$A = A^t$$

● Demonstra-se que a matriz, numa base ortonormal, de um operador simétrico é sempre simétrica, independente da base ortonormal do espaço vetorial. Neste estudo serão utilizadas somente bases canônicas.

Exemplos

1) O operador linear $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2$, $f(x, y) = (2x + 4y, 4x - y)$ é simétrico pois a matriz canônica de $f$

$$A = \begin{bmatrix} 2 & 4 \\ 4 & -1 \end{bmatrix}$$

é simétrica, isto é, $A = A^t$

2) No $\mathbb{R}^3$, o operador $f$ definido por $f(x, y, z) = (x - y, -x + 3y - 2z, -2y)$ é simétrico e sua matriz canônica é

$$A = \begin{bmatrix} 1 & -1 & 0 \\ -1 & 3 & -2 \\ 0 & -2 & 0 \end{bmatrix} = A^t$$

4.5.1 – Propriedade dos Operadores Simétricos

Se $f: \mathbb{V} \rightarrow \mathbb{V}$ é um operador simétrico, tem-se para quaisquer vetores $\mu, \epsilon, v \in \mathbb{V}$:

$$f(\mu) \cdot v = \mu \cdot f(v)$$

De fato, sendo $A = A^t$ a matriz simétrica de $f$, vem:

$$f(\mu) \cdot v = (A\mu) \cdot v$$
$$= (A\mu)^t v$$
$$= \mu^t A^t v$$
$$= \mu^t A v$$
$$= \mu \cdot A v = \mu \cdot f(v)$$

**Exemplo**

Sejam o operador simétrico $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2$, $f(x, y) = (x + 3y, 3x - 4y)$ e os vetores $\mu = (2, 3)$ e $v = (4, 2)$. A definição do operador permite escrever

$$f(\mu) = (11, -6)$$
$$f(v) = (10, 4)$$

mas,

$$f(\mu) \cdot v = (11, -6) \cdot (4, 2) = 44 - 12 = 32$$
$$\mu \cdot f(v) = (2, 3) \cdot (10, 4) = 20 + 12 = 32$$

e, portanto,

$$f(\mu) \cdot v = \mu \cdot f(v).$$

### 4.6 – Problemas Propostos

Nos problemas 1 a 6 são dados operadores lineares $f$ em $\mathbb{R}^2$ e em $\mathbb{R}^3$. Verificar quais são inversíveis e, nos casos afirmativos, determinar uma fórmula para $f^{-1}$.

1) $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2, f(x, y) = (3x - 4y, -x + 2y)$
2) $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2, f(x, y) = (x - 2y, -2x + 3)$
3) $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2, f(x, y) = (2x - y, -4x + 2y)$
4) $f: \mathbb{R}^3 \rightarrow \mathbb{R}^3, f(x, y, z) = (x - y + 2z, y - z, 2y - 3z)$
5) $f: \mathbb{R}^3 \rightarrow \mathbb{R}^3, f(x, y, z) = (x, x - z, x - y - z)$

6) $f: \mathbb{R}^3 \rightarrow \mathbb{R}^3, f(x, y, z) = (x - y + 2z, y - z, -2x + y - 3z)$
7) Dado o operador linear $f: \mathbb{R}^3 \rightarrow \mathbb{R}^3$ definido pela matriz
$$A = \begin{bmatrix}
1 & 0 & 1 \\
2 & -1 & 1 \\
0 & 0 & -1
\end{bmatrix},$$
a) determinar a lei que define o operador $f^{-1}$;
b) obter o vetor $v \in \mathbb{R}^3$, tal que $f(v) = (2, -3, 0)$.
8) Mostrar que o operador linear no $\mathbb{R}^3$ definido pela matriz
$$A = \begin{bmatrix}
1 & 2 & 3 \\
2 & 3 & 4 \\
3 & 5 & 7
\end{bmatrix}$$
não é inversível e calcular $v \in \mathbb{R}^3$ tal que $f(v) = (6, 9, 15)$.

9) Verificar se o operador linear $f: \mathbb{R}^3 \rightarrow \mathbb{R}^3$ definido por $f(1, 0, 0) = (2, -1, 0), f(0, -1, 0) = (-1, -1, -1)$ e $f(0, 3, -1) = (0, 1, 1)$ é inversível e, em caso afirmativo, determinar $f^{-1}(x, y, z)$.

10) Utilizar a inversão de matrizes de ordem 2 para mostrar que:
a) a transformação linear inversa de uma reflexão em relação ao eixo dos x é uma reflexão em relação a esse eixo;
b) a transformação linear inversa de uma dilatação ao longo de um eixo é uma contração ao longo desse eixo;
c) a inversa de uma rotação do plano de um ângulo $\theta$ é a rotação do plano do ângulo $-\theta$.

Nos problemas 11 a 14, determinar, em cada um deles, primeiramente, a matriz de $f$ na base A e, a seguir, utilizando a relação entre matrizes semelhantes, calcular a matriz de $f$ na base B.

11) $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2, f(x, y) = (x + 2y, -x + y)$
$$A = \{(-1, 1), (1, 2)\} \text{ e } B = \{(1, -3), (0, 2)\}$$

12) $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2, f(x, y) = (2x - 3y, x + y)$
A = $\{(1, 0), (0, 1)\}$ e B = $\{(3, 0), (-2, -1)\}$

13) $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2, f(x, y) = (7x - 4y, -4x + y)$
A é a base canônica e B = $\{(-2, 1), (1, 2)\}$

14) $f: \mathbb{R}^3 \rightarrow \mathbb{R}^3, f(x, y, z) = (x - 2y - 2z, y, 2y + 3z)$
A é a base canônica e B = $\{(0, 1, -1), (1, 0, 0), (-1, 0, 1)\}$

15) Seja $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ um operador linear. Dadas as bases A = $\{(1, 0), (0, 1)\}$ e B = $\{(4, 1), (-11, -3)\}$ e sabendo que
$$T_B = \begin{bmatrix} 3 & 5 \\ 1 & 2 \end{bmatrix},$$

determinar $T_A$, utilizando a relação entre matrizes semelhantes.

16) Dado o operador linear $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2, f(x, y) = (x + y, x - y),$
a) determinar $T_B$, sendo B = $\{(1, 2), (0, -1)\}$;
b) utilizar $T_B$ para calcular $f(v)_B$, sabendo que $v = (4, 2)$.
17) Determinar três matrizes semelhantes à matriz
$$A = \begin{bmatrix} 1 & 1 \\ -1 & 2 \end{bmatrix}$$

18) Quais dos seguinte operadores no $\mathbb{R}^2$ são ortogonais?
a) $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2, f(x, y) = (\frac{1}{\sqrt{2}}x - \frac{1}{\sqrt{2}}y, \frac{1}{\sqrt{2}}x + \frac{1}{\sqrt{2}}y)$
b) $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2, f(x, y) = (-y, -x)$
c) $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2, f(x, y) = (x + y, x - y)$

19) Quais dos seguinte operadores no $\mathbb{R}^3$ são ortogonais?
a) $f: \mathbb{R}^3 \rightarrow \mathbb{R}^3, f(x, y, z) = (z, x, -y)$



[... 4 more pages omitted]