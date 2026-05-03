Para melhor entendermos $N(T)$, consideremos a matriz de $T$ na base canônica. Temos, então, se $(T) = (a_{ij})$ e $\vec{u} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$, $T\vec{u}$ é dado por:

$$\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = x \begin{pmatrix} a_{11} \\ a_{21} \\ a_{31} \end{pmatrix} + y \begin{pmatrix} a_{12} \\ a_{22} \\ a_{32} \end{pmatrix} + z \begin{pmatrix} a_{13} \\ a_{23} \\ a_{33} \end{pmatrix} = \begin{pmatrix} a_{11}x \\ a_{21}x \\ a_{31}x \end{pmatrix} + \begin{pmatrix} a_{12}y \\ a_{22}y \\ a_{32}y \end{pmatrix} + \begin{pmatrix} a_{13}z \\ a_{23}z \\ a_{33}z \end{pmatrix} = \begin{pmatrix} a_{11}x + a_{12}y + a_{13}z \\ a_{21}x + a_{22}y + a_{23}z \\ a_{31}x + a_{32}y + a_{33}z \end{pmatrix}.$$

Assim, para que $\vec{u}$ esteja no núcleo de $T$, é preciso que suas coordenadas satisfaçam às três equações:

$$\begin{cases} a_{11}x + a_{12}y + a_{13}z = 0 \\ a_{21}x + a_{22}y + a_{23}z = 0 \\ a_{31}x + a_{32}y + a_{33}z = 0 \end{cases}$$

**Exercício 17.2** Mostre que $N(T)$ é o complemento ortogonal do subespaço gerado pelos vetores linha da matriz de $T$ na base canônica.

Em princípio, cada uma das três equações define um plano passando pela origem (a menos que os três coeficientes sejam nulos, o que daria $0 = 0$). Como $N(T)$ é a interseção, temos as seguinte possibilidades:

- Os planos se interceptam em um ponto (que, necessariamente é $\vec{0}$, já que todos passam pela origem). Neste caso, a dimensão de $N(T)$ é 0 ($dimN(T) = 0$).
- Os planos se interceptam em uma reta passando pela origem. Neste caso, a dimensão de $N(T)$ é 1 ($dimN(T) = 1$).
- Os planos são coincidentes: $N(T)$ é um plano passando pela origem. Neste caso, a dimensão de $N(T)$ é 2 ($dimN(T) = 2$).
- Caso totalmente degenerado: todos as entradas da matriz de $T$ são nulas, as três equações são $0 = 0$, $N(T) = V$. Neste caso, a dimensão de $N(T)$ é 3 ($dimN(T) = 3$).

É interessante observar que o primeiro caso corresponde a $T$ ser um isomorfismo, já que $T\vec{e}_1$, $T\vec{e}_2$ e $T\vec{e}_3$ terão que ser linearmente independentes (caso contrário, teríamos $\vec{0} = xT\vec{e}_1 + yT\vec{e}_2 + zT\vec{e}_3$, para algum terno $(x,y,z) \neq (0,0,0)$, o que daria um elemento não nulo, $x\vec{e}_1 + y\vec{e}_2 + z\vec{e}_3$ em $N(T)$). Por acaso, isto nos dá, como $dimV = 3$,

$$dimN(T) + dimIm(T) = dimV.$$