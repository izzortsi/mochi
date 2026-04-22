Appendix F  Littlewood’s Three Principles

In the following excerpt from his book on complex analysis, *Lectures on the Theory of Functions*, J.E. Littlewood seeks to demystify Lebesgue theory. It owes some of its popularity to its prominence in Royden’s classic text, *Real Analysis*.

The extent of knowledge [of real analysis] required is nothing like as great as is sometimes supposed. There are three principles, roughly expressible in the following terms: Every (measurable) set is nearly a finite sum of intervals; every function (of class $L^\lambda$) is nearly continuous; and every convergent sequence of functions is nearly uniformly convergent. Most of the results of the present section are fairly intuitive applications of these ideas, and the student armed with them should be equal to most occasions when real variable theory is called for. If one of the principles would be the obvious means to settle a problem if it were “quite” true, it is natural to ask if the “nearly” is near enough, and for a problem that is actually soluble it generally is.†

Littlewood’s First Principle expresses the regularity of Lebesgue measure (Theorem 16). Given $\epsilon > 0$, a measurable $E \subset [a,b]$ contains a compact subset covered by finitely many intervals whose union differs from $E$ by a set of measure less than $\epsilon$. In that sense, $E$ is nearly a finite union of intervals. I like very much Littlewood’s choice of the term “nearly,” meaning “except for an $\epsilon$-set,” to contrast with “almost,” meaning “except for a zero set.”

Littlewood’s Second Principle refers to “functions of class $L^\lambda$,” although he might better have said “measurable functions.” He means that if you have a measurable function and you are given $\epsilon > 0$ then you can discard an $\epsilon$-set from its domain of definition and the result is a continuous function. This is *Lusin’s Theorem*: a measurable function is nearly continuous.

Proof of Lusin’s Theorem We assume that $f : \mathbb{R} \rightarrow \mathbb{R}$ is measurable and $\epsilon > 0$ is given. We use the fact that $\mathbb{R}$ has a countable base $Y = \{Y_1, Y_2, \ldots\}$ for its topology. (This means every open subset of $\mathbb{R}$ can be expressed as a union of some of the members of $Y$. For instance, we could take $Y$ to be the collection of all open intervals with rational endpoints.)

Using the preimage definition of measurability we know that $f^{\text{pre}}(Y_k)$ is measurable so there exists a sandwich $K_k \subset f^{\text{pre}}(Y_k) \subset U_k$ where $K_k$ is closed, $U_k$ is

†Reprinted from *Lectures on the Theory of Functions* by J.E. Littlewood (1994) by permission of Oxford University Press.