Figure 158 The shaded region is contained in the interior of $Uf$.

Proof of Theorem 68 Applying Lemma 69 to $f : [a, b] \rightarrow [0, M]$ gives

$$Uf = \text{int}(Uf) \quad \text{and} \quad \widehat{Uf} = \overline{Uf}.$$

Since open sets and closed sets are measurable, this implies $\underline{f}$ and $\overline{f}$ are measurable functions. Thus

$$m(\partial(Uf)) = m(\overline{Uf} \setminus \text{int}(Uf)) = m(\widehat{Uf}) - m(Uf) = \int_{[a, b]} \overline{f} - \underline{f}.$$

The integral is zero if and only if $\overline{f} = \underline{f}$ almost everywhere, i.e., if and only if $f$ is continuous almost everywhere, i.e., by the Riemann-Lebesgue Theorem (Theorem 23 in Chapter 3) if and only if $f$ is Riemann integrable. $\square$

70 Corollary If $f$ is Riemann integrable then it is Lebesgue integrable and the two integrals are equal.

Proof Since

$$\text{interior} Uf \subset Uf \subset \text{closure} Uf,$$

equality of the measures of its interior and closure implies that $Uf$ is measurable, and it shares their common measure. Since the Lebesgue integral of $f$ is equals $m(Uf)$ the proof is complete. $\square$

Remark The undergraph definition of integrals has a further expression in terms of Jordan content: The Riemann integral of a function $f : [a, b] \rightarrow [0, M]$ is the Jordan content of its undergraph, $J(Uf)$, provided that $J(Uf)$ exists. See Exercises 11 - 14. In brief, Undergraphs lead to natural pictorial ways of dealing with integrals, both Riemann and Lebesgue.