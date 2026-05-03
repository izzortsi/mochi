$$\left(T\right)_{\alpha}^{\beta} = \begin{pmatrix} a_{11} & \ldots & a_{1n} \\ \vdots & \vdots & \vdots \\ a_{m1} & \ldots & a_{mn} \end{pmatrix},$$

de modo que as colunas de $(T)_{\alpha}^{\beta}$ são as representações na base $\beta$ das imagens por $T$ dos vetores da base $\alpha$. Assim, a representação na base $\beta$ da imagem de $\mathbf{v}$ por $T$ é dada por $(T\mathbf{v})^{\beta} = (T)_{\alpha}^{\beta}(\mathbf{v})^{\alpha}$, sendo o produto definido por

$$\begin{pmatrix} a_{11} & \ldots & a_{1n} \\ \vdots & \vdots & \vdots \\ a_{m1} & \ldots & a_{mn} \end{pmatrix} \begin{pmatrix} x_{1} \\ \vdots \\ x_{n} \end{pmatrix} = \begin{pmatrix} a_{11}x_{1} + \ldots + a_{1j}x_{j} + \ldots + a_{1n}x_{n} \\ \vdots \\ a_{m1}x_{1} + \ldots + a_{mj}x_{j} + \ldots + a_{mn}x_{n} \end{pmatrix} = x_{1}\begin{pmatrix} a_{11} \\ \vdots \\ a_{m1} \end{pmatrix} + \ldots + x_{j}\begin{pmatrix} a_{1j} \\ \vdots \\ a_{mj} \end{pmatrix} + \ldots + x_{n}\begin{pmatrix} a_{1n} \\ \vdots \\ a_{mn} \end{pmatrix}.$$

**Exercício 13.19** Sejam $\mathbf{U}$, $\mathbf{V}$ e $\mathbf{W}$ espaços vetoriais de dimensão finite nos quais fixamos bases (respectivas) $\alpha$, $\beta$ e $\gamma$. Sejam $T : \mathbf{U} \rightarrow \mathbf{V}$ e $S : \mathbf{V} \rightarrow \mathbf{W}$ transformações lineares. Suponhamos que $(S)_{\beta}^{\gamma} = \left(a_{ij}\right) e (T)_{\alpha}^{\beta} = \left(b_{kl}\right)$. Mostre que $(ST)_{\alpha}^{\gamma} = \left(a_{ij}\right) \left(b_{kl}\right)$, definida por

$$\begin{pmatrix} a_{11} & \ldots & a_{1m} \\ \vdots & \vdots & \vdots \\ a_{p1} & \ldots & a_{pm} \end{pmatrix} \begin{pmatrix} b_{11} & \ldots & b_{1n} \\ \vdots & \vdots & \vdots \\ b_{m1} & \ldots & b_{mn} \end{pmatrix} = \begin{pmatrix} c_{11} & \ldots & c_{1n} \\ \vdots & \vdots & \vdots \\ c_{p1} & \ldots & a_{pn} \end{pmatrix},$$

com

$$c_{il} = \sum_{j=1}^{m} a_{ij}b_{jl}.$$

**Exercício 13.20** Seja $S : \mathbb{C}^{n} \rightarrow \mathbb{C}^{n}$ dada por $S(z_{1}, z_{2}, \ldots, z_{n}) = \left(z_{n}, z_{1}, z_{2}, \ldots, z_{n-1}\right)$. Exiba a matriz $(S)_{\alpha}^{\alpha}$, sendo $\alpha$ a base canônica de $\mathbb{C}^{n}$.

**Exercício 13.21** Considere a transformação $S$ do exercício anterior. Encontre todos os números complexos $\lambda$ para os quais existe $\mathbf{z} \in \mathbb{C}^{n}$, $\mathbf{z} \neq (0, \ldots, 0)$ tal que $S\mathbf{z} = \lambda\mathbf{z}$. Escolha, para cada um dos tais $\lambda s$, um $\varepsilon$, unitário, tal que $S\varepsilon = \lambda\varepsilon$. Mostre que esses $\varepsilon s$ formam uma base ortonormal de $\mathbb{C}^{n}$. Encontre a matriz de $S$ nessa base.