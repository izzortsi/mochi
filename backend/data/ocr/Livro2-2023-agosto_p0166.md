18.9 A dimensão do espaço das formas $p$-lineares alternadas

Dedicaremos os próximos parágrafos a provar que, se $\mathbf{V}$ é espaço vetorial de dimensão $n$, real ou complexo, então

$$dim \mathcal{A}_p(\mathbf{V}) = \binom{n}{p}.$$

Admitiremos fixada uma base de $\mathbf{V}$, cujos elementos designaremos por $\mathbf{e}_1, \ldots, \mathbf{e}_n$, e identificaremos $V$ com $\mathbf{K}^n$ ($\mathbf{K} = \mathbb{R}$ ou $\mathbf{K} = \mathbb{C}$) por meio de $\mathbf{v} = v_1e_1 + \ldots + v_ne_n$.

Recordamos que as $p$-listas são elementos de $\{1, \ldots, n\}^p$. Uma $p$-lista será designada por $J$, sendo $J = (J_1, \ldots, J_p)$. Também trabalharemos com as $p$-listas crescentes, que estão em $\mathcal{J}$ definido por

$$\mathcal{J} = \{J \in \{1, \ldots, n\}^p \mid J_1 < J_2 < \ldots < J_p\}.$$

Seja, para cada $p$-lista $J$, $\pi_J$ a projeção de $K^n$ (ou $\mathbf{V}$) sobre $K^p$, dada por:

$$\pi_J(\mathbf{v}) = (v_{J_1}, \ldots, v_{J_p}).$$

Observemos agora que, se $\mathbf{v}_1, \ldots, \mathbf{v}_p$ são elementos de $\mathbf{V}$, faz sentido calcular o determinante $det_p$ nos $p$ vetores de $K^p$ obtidos aplicando $\pi_J$ a $\mathbf{v}_1, \ldots, \mathbf{v}_p$. O lema 2 nos permite definir as formas elementares $dx_J$, para as $p$-listas $J$.

Definição: As formas alternadas elementares $dx_J$ são definidas, para cada $p$-lista $J$, por

$$dx_J(\mathbf{v}_1, \ldots, \mathbf{v}_p) = det_p(\pi_J(\mathbf{v}_1), \ldots, \pi_J(\mathbf{v}_p)).$$

Para cada $p$-lista $J$, definiremos $\mathbf{e}_J \in \mathbf{V}^p$ por $e_J = (\mathbf{e}_{J_1}, \ldots, \mathbf{e}_{J_p})$.

Exercício 18.31 Note que $dx_J$ é identicamente nula se $J$ tem índices repetidos (já que, nesse caso, $\pi_J(\mathbf{v}_1), \ldots, \pi_J(\mathbf{v}_p)$ são linearmente dependentes). Note, também, que, se os índices são todos diferentes, $dx_J(\mathbf{e}_J) = 1$. Em particular, se $J \in \mathcal{J}$, $dx_J(\mathbf{e}_J) = 1$.

Exercício 18.32 Suponha que $I$ e $J$ são tais que $\{I_1, \ldots, I_p\} \neq \{J_1, \ldots, J_p\}$. Mostre que $dx_I(\mathbf{e}_J) = 0$.

Exercício 18.33 Suponha que $I$ e $J$ são tais que $\{I_1, \ldots, I_p\} = \{J_1, \ldots, J_p\}$. Seja $\tau \in S_p$ tal que $(I_1, \ldots, I_p) = (J_{\tau_1}, \ldots, J_{\tau_p})$. Mostre que, para toda forma $p$-linear alternada $\omega$ e para quaisquer $\mathbf{v}_1, \ldots, \mathbf{v}_p$ em $\mathbf{V}$, vale $\omega(\mathbf{v}_{I_1}, \ldots, \mathbf{v}_{I_p}) = sgn\tau\omega(\mathbf{v}_{J_1}, \ldots, \mathbf{v}_{J_p})$.

Finalmente podemos demonstrar nosso resultado principal. Embora não seja necessário, vamos explicitar $\mathbf{V} = \mathbb{R}^n$ ou $\mathbf{V} = \mathbb{C}^n$.