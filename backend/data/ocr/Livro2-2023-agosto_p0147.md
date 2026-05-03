linha da matriz. Na verdade, temos que o complemento ortogonal de $N(T)$ é o subespaço gerado pelos vetores linha da matriz. Assim, a dimensão do subespaço gerado pelas colunas da matriz é igual à do subespaço gerado por suas linhas.

17.2 O caso geral

Definição: Sejam $\mathbf{V}$ e $\mathbf{W}$ espaços vetoriais (reais ou complexos) e $T : \mathbf{V} \rightarrow \mathbf{W}$ uma transformação linear. O núcleo de $T$ é o subespaço $N(T)$ de $\mathbf{V}$, definido por

$$N(T) = T^{-1}(0) = \{ \mathbf{v} \in \mathbf{V} \mid T\mathbf{v} = 0 \}.$$

A imagem de $T$ é o subespaço $Im(T)$ de $\mathbf{V}$, definido por

$$Im(T) = T(\mathbf{V}) = \{ T\mathbf{v}, \mathbf{v} \in \mathbf{V} \}.$$

É imediato que, se, para um certo $\mathbf{u} \in \mathbf{V}$ e um certo $\mathbf{w} \in \mathbf{W}$, se tem $T\mathbf{u} = \mathbf{w}$, então

$$T^{-1}(\mathbf{w}) = \mathbf{u} + N(T) = \{ \mathbf{u} + \mathbf{v} \mid \mathbf{v} \in N(T) \}$$

(e claro que $T(\mathbf{u} + \mathbf{v}) = T\mathbf{u} + T\mathbf{v} = \mathbf{w} + 0 = \mathbf{w}$, $\forall \mathbf{v} \in N(T)$; reciprocamente, se $\mathbf{u}_1 \in T^{-1}(\mathbf{w})$, então $T(\mathbf{u}_1 - \mathbf{u}) = \mathbf{w} - \mathbf{w} = 0$, o que mostra que $\mathbf{u}_1 - \mathbf{u} \in N(T)$, e $\mathbf{u}_1 = \mathbf{u} + (\mathbf{u}_1 - \mathbf{u})$).

Exercício 17.4 Mostre que o núcleo é, de fato, subespaço vetorial de $\mathbf{V}$. Mostre que a imagem é subespaço de $\mathbf{W}$.

Consideremos, no caso geral, dois espaços vetoriais (podem ser reais ou complexos, nada muda), $\mathbf{V}$ e $\mathbf{W}$ e uma transformação linear, $T$, de $\mathbf{V}$ em $\mathbf{W}$. Vamos supor que $\mathbf{V}$ é de dimensão finita (o que assegura que $Im(T) = \{ Tv, v \in \mathbf{V} \}$, também, é de dimensão finita).

Teorema do Núcleo e da Imagem: Se $T : \mathbf{V} \rightarrow \mathbf{W}$ é linear e $\mathbf{V}$ é de dimensão finita, então

$$dim N(T) + dim Im(T) = dim \mathbf{V}.$$

Demonstração: Como $N(T)$ é, forçosamente, de dimensão finita, podemos tomar uma base, $\alpha = \{\varepsilon_1, \ldots, \varepsilon_k\}$, de $N(T)$. Podemos ainda, graças a nosso velho e bom Lema Fundamental (que vale, sem alterações, para espaços complexos), complementá-la com $n - k$ vetores, $\varepsilon_{k+1}, \ldots, \varepsilon_n$, de forma que $\beta = \{\varepsilon_1, \ldots, \varepsilon_n\}$ seja base de $\mathbf{V}$. Seja, então, $\mathbf{V}_1$ o espaço gerado por $\varepsilon_{k+1}, \ldots, \varepsilon_n$ (note que $dim \mathbf{V}_1 = n - k = dim \mathbf{V} - dim N(T)$). Consideremos, agora, os vetores $\mathbf{w}_1 = T\varepsilon_{k+1}, \ldots, \mathbf{w}_{n-k} = T\varepsilon_n$ em $Im(T) \subset \mathbf{W}$. Vamos provar que $\mathbf{w}_1, \ldots, \mathbf{w}_{n-k}$ formam base de $Im(T)$, o que encerrará a demonstração.

$^2$Neste caso, $\mathbf{V}$ é soma direta de $N(T)$ com $\mathbf{V}_1$, isto é, todo elemento de $\mathbf{V}$ se obtém, de forma única, como soma de um de $N(T)$ com um de $\mathbf{V}_1$. Se $\mathbf{V}$ for espaço com produto interno, podemos nos dar ao luxo de escolher $\mathbf{V}_1 = N(T)^\perp = \{ \mathbf{v} \in V \mid \langle \mathbf{v}, n \rangle = 0 \forall n \in N(T) \}$, isto é, o complemento ortogonal de $N(T)$