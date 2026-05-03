$$det_n(v_1, \ldots, v_n) = \sum_{\sigma \in S_n} sgn\sigma \delta_n(v_{\sigma_1}, \ldots, v_{\sigma_n}) = \sum_{\sigma \in S_n} sgn\sigma v_{1\sigma_1} \ldots v_{n\sigma_n},$$

é chamada de **determinante.**$^5$

**Observação 3:** Note que, na expressão $\sum_{\sigma \in S_n} sgn\sigma v_{1\sigma_1} \ldots v_{n\sigma_n}$, podemos usar a comutatividade do produto para, a nosso bel prazer, trocar a ordem dos fatores em cada uma das parcelas. Se decidirmos, na parcela $v_{1\sigma_1} \ldots v_{n\sigma_n}$, permutar os fatores usando $\sigma^{-1}$, teremos

$$v_{1\sigma_1} \ldots v_{n\sigma_n} = v_{\sigma^{-1}_1\sigma^{-1}_1} \ldots v_{\sigma^{-1}_n\sigma^{-1}_n} = v_{\sigma^{-1}_11} \ldots v_{\sigma^{-1}_n n}.$$

Assim, podemos escrever:

$$det_n(v_1, \ldots, v_n) = \sum_{\sigma \in S_n} sgn\sigma v_{1\sigma_1} \ldots v_{n\sigma_n} =$$

$$= \sum_{\sigma \in S_n} sgn\sigma v_{\sigma^{-1}_11} \ldots v_{\sigma^{-1}_n n} = \sum_{\sigma \in S_n} sgn(\sigma^{-1})v_{\sigma^{-1}_11} \ldots v_{\sigma^{-1}_n n},$$

já que $sgn\sigma = sgn(\sigma^{-1})$. Ora, quando $\sigma$ percorre §$n$, é claro que $\sigma^{-1}$ também percorre $S_n$. Concluímos, então, que

$$det_n(v_1, \ldots, v_n) = \sum_{\sigma \in S_n} sgn\sigma v_{1\sigma_1} \ldots v_{n\sigma_n} = \sum_{\sigma \in S_n} sgn\sigma v_{\sigma_11} \ldots v_{\sigma_n n},$$

o que, no caso de matrizes, significará que o determinante de toda matriz quadrada é igual ao de sua transposta.

**Exercício 18.25** Mostre que $det_n(e_1, \ldots, e_n) = 1$.

**Exercício 18.26** Defina, em $R^n$, a norma do vetor $v = (v_1, \ldots, v_n), |v|$, por

$$|v| = \sqrt{v_1^2 + \cdots + v_n^2}.$$

Mostre que, para quaisquer vetores $u_1, \ldots, u_n$ em $R^n$, vale

$$|det_n(u_1, \ldots, u_n)| \leq |u_1| \cdots |u_n|.$$

$^5$Estamos usando a seguinte notação: o vetor $v_j$ tem por coordenadas $(v_{1j}, \ldots, v_{nj})$