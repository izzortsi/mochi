$$\begin{pmatrix} y'_1 \\ y'_2 \\ y'_3 \end{pmatrix} = \begin{pmatrix} \cos \theta & -\sin \theta & 0 \\ \sin \theta & \cos \theta & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix}$$

**Exercício 15.3** Observe que as colunas da matriz $$\begin{pmatrix} \cos \theta & -\sin \theta & 0 \\ \sin \theta & \cos \theta & 0 \\ 0 & 0 & 1 \end{pmatrix}$$ são as respectivas coordenadas, na base $\alpha$, de $R\vec{\epsilon}_1$, $R\vec{\epsilon}_2$ e $R\vec{\epsilon}$.

Vamos chamar a matriz

$$\begin{pmatrix} \cos \theta & -\sin \theta & 0 \\ \sin \theta & \cos \theta & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

de matriz da transformação $R$ na base $\alpha$; vamos notá-la por $(R)_\alpha$. Chamando de $\beta$ a base canônica, nosso problema, ainda, é obter a matriz de $R$ em relação a $\beta$ (que chamaremos de $(R)_\beta)$.

**Exercício 15.4** Note que o problema estárá resolvido se obtivermos dois conversores: o primeiro, que chamaremos de $(I)_\alpha^\beta$, converte as coordenadas $(x_1, x_2, x_3)$ (do vetor $\vec{v}$ na base $\beta$) nas coordenadas $(y_1, y_2, y_3)$ (do vetor $\vec{v}$ na base $\alpha$); o segundo, que chamaremos de $(I)_\alpha^\beta$, reverte as coordenadas $(y'_1, y'_2, y'_3)$ (do vetor $R\vec{v}$ na base $\alpha$) nas coordenadas $(x'_1, x'_2, x'_3)$ (do vetor $R\vec{v}$ na base $\beta$).

Já temos as coordenadas, $(a, b, c)$, de $\vec{\epsilon}$ na base $\beta$. Suponhamos que as de $\vec{\epsilon}_1$ e de $\vec{\epsilon}_2$ sejam, respectivamente, $(a_1, b_1, c_1)$ e $(a_2, b_2, c_2)$. É fácil, então, obter as coordenadas de $R\vec{v}$ na base canônica, a partir de suas coordenadas na base $\alpha$:

$$\begin{pmatrix} x'_1 \\ x'_2 \\ x'_3 \end{pmatrix} = y'_1 \begin{pmatrix} a_1 \\ b_1 \\ c_1 \end{pmatrix} + y'_2 \begin{pmatrix} a_2 \\ b_2 \\ c_2 \end{pmatrix} + y'_3 \begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} a_1 & a_2 & a \\ b_1 & b_2 & b \\ c_1 & c_2 & c \end{pmatrix} \begin{pmatrix} y'_1 \\ y'_2 \\ y'_3 \end{pmatrix}.$$

O que acabamos de obter, na verdade, é bem geral: acabamos de criar um método geral para converter as coordenadas de um vetor em uma base qualquer nas coordenadas do mesmo vetor em outra base qualquer. Vamos patenteá-lo, sob forma de proposição.

**Proposição:** Sejam $\alpha$ e $\beta$ são duas bases e $\vec{v}$ um vetor de $V$. Se $(\vec{v})_\alpha$ e $(\vec{v})_\beta$ são, respectivamente, os vetores coluna representando $\vec{v}$ nas bases $\alpha$ e $\beta$, então $(\vec{v})_\beta = (I)_\alpha^\beta(\vec{v})_\alpha$, sendo $(I)_\alpha^\beta$ a matriz cujos vetores coluna são os vetores da base $\alpha$ representados na base $\beta$.

Voltando ao nosso problema, já sabemos converter coordenadas de vetores na base $\alpha$ para as coordenadas na base canônica. Para converter coordenadas na base canônica