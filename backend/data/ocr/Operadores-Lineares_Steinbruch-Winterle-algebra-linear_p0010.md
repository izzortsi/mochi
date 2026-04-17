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