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