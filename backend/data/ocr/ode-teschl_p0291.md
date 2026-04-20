However, this result can be quite misleading as the following example shows. A refined version of the above growth model is given by

$$\dot{N}(t) = \kappa N(t)(L - N(t)),$$

(10.4)

where the population is limited by a maximum $L$. We have seen in Section 1.5, that for any positive initial population $N_0$, the species will eventually tend to the limiting population $L$. The discrete version reads

$$N(n + 1) - N(n) = kN(n)(L - N(n))$$

(10.5)

or equivalently

$$N(n + 1) = kN(n)(\tilde{L} - N(n)), \quad \tilde{L} = L + \frac{1}{k}.$$

(10.6)

Introducing $x_n = N(n)/\tilde{L}$, $\mu = k\tilde{L}$ we see that it suffices to consider

$$x_{n+1} = \mu x_n(1 - x_n),$$

(10.7)

which is known as the **logistic equation**. Introducing the quadratic function

$$L_\mu(x) = \mu x(1 - x)$$

(10.8)

we can write the solution as the $n$’th iterate of this map, $x_n = L_\mu^n(x_0)$. But if you try to work out a closed expression for these iterates, you will soon find out that this is not as easy as in the continuous case. Moreover, the above difference equation leads to very complicated dynamics and is still not completely understood.

To get a first impression of the behavior of solutions let us do some numerical experiments. We will consider $0 \leq \mu \leq 4$ in which case the interval $[0, 1]$ is mapped into itself under $L_\mu$.

First of all, we will use the following Mathematica code

```mathematica
In[1]:= ShowWeb[f_, xstart_, nmax_] :=
Module[{x, xmin, xmax, delta, graph, web},
x[0] := xstart;
x[n_] := x[n] = f[x[n - 1]];
web = Flatten[Table[{{x[n], x[n]}, {x[n], x[n + 1]}}],
{n, 0, nmax}], 1];
xmax = Max[web]; xmin = Min[web]; delta = 0.1(xmax - xmin)
graph = Plot[{f[x], x}, {x, xmin - delta, xmax + delta}];
Show[graph, Graphics[Line[web]]]
];

to visualize nmax iterations of a function $f(x)$ starting at xstart. If $\mu$ is small, say $\mu = 1$,

In[2]:= ShowWeb[1#(1 - #)&, 0.4, 20]
```