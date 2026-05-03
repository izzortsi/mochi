13.3 O caso geral

Sejam V e W espaços vetoriais de dimensão finita, $T : \mathbf{V} \rightarrow \mathbf{W}$ transformação linear. Sejam

$$\alpha = \{ \mathbf{e}_1, \ldots, \mathbf{e}_n \}, \beta = \{\varepsilon_1, \ldots, \varepsilon_m\}$$

bases de $\mathbf{V}$ e $\mathbf{W}$, respectivamente. Suponhamos que $\mathbf{v} = x_1\mathbf{e}_1 + \cdots + x_n\mathbf{e}_n$ seja um vetor qualquer de $\mathbf{V}$. Queremos obter a representação de $T\mathbf{v}$ na base $\beta$. Como $T\mathbf{v} = x_1T\mathbf{e}_1 + \cdots + x_nT\mathbf{e}_n$, fica claro que basta conhecer as expressões, na base $\beta$, de $T\mathbf{e}_1, \ldots, T\mathbf{e}_n$. Admitindo que $T\mathbf{e}_j = a_{1j}\varepsilon_1 + \cdots + a_{mj}\varepsilon_m$, é só fazer as contas.

As coisas podem ficar mais simples se convencionarmos que, para qualquer $n$-upla $(x_1, \ldots, x_n)$, o vetor $\mathbf{v} = x_1\mathbf{e}_1 + \cdots + x_n\mathbf{e}_n$ de $\mathbf{V}$ será representado pelo vetor coluna $(\mathbf{v})^\alpha$,

$$(\mathbf{v})^\alpha = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix},$$

enquanto, para cada $m$-upla $(y_1, \ldots, y_m)$, o vetor $\mathbf{w} = y_1\varepsilon_1 + \cdots + y_m\varepsilon_m$ de $\mathbf{W}$ será representado pelo vetor coluna $(\mathbf{w})^\beta$,

$$(\mathbf{w})^\beta = \begin{pmatrix} y_1 \\ \vdots \\ y_m \end{pmatrix}.$$

Teremos, então,

$$(T\mathbf{e}_1)^\beta = \begin{pmatrix} a_{11} \\ \vdots \\ a_{m1} \end{pmatrix}, \ldots, (T\mathbf{e}_j)^\beta = \begin{pmatrix} a_{1j} \\ \vdots \\ a_{mj} \end{pmatrix}, \ldots, (T\mathbf{e}_n)^\beta = \begin{pmatrix} a_{1n} \\ \vdots \\ a_{mn} \end{pmatrix},$$

o que nos dá, se $\mathbf{v} = x_1\mathbf{e}_1 + \cdots + x_n\mathbf{e}_n$ e $T\mathbf{v} = y_1\varepsilon_1 + \cdots + y_m\varepsilon_m$,

$$\begin{pmatrix} y_1 \\ \vdots \\ y_m \end{pmatrix} = x_1 \begin{pmatrix} a_{11} \\ \vdots \\ a_{m1} \end{pmatrix} + \cdots + x_j \begin{pmatrix} a_{1j} \\ \vdots \\ a_{mj} \end{pmatrix} + \cdots + x_n \begin{pmatrix} a_{1n} \\ \vdots \\ a_{mn} \end{pmatrix},$$

ou seja,

$$\begin{pmatrix} y_1 \\ \vdots \\ y_m \end{pmatrix} = \begin{pmatrix} a_{11}x_1 + \cdots + a_{1j}x_j + \cdots + a_{1n}x_n \\ \vdots \\ a_{m1}x_1 + \cdots + a_{mj}x_j + \cdots + a_{mn}x_n \end{pmatrix}.$$

Dizemos, então, que a matriz de $T$, referente às bases $\alpha$ para $\mathbf{V}$ e $\beta$ para $\mathbf{W}$, é $(T)^\alpha_\beta$, dada por