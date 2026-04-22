that if $V$ is a vector space with a norm then its closed unit ball is compact if and only if the space is finite-dimensional. The proof is not especially hard.

Nevertheless, we want to have theorems that guarantee certain closed and bounded subsets of $C^0$ are compact. For we want to extract a convergent subsequence of functions from a given sequence of functions. The simple condition that lets us go ahead is equicontinuity. A sequence of functions $(f_n)$ in $C^0$ is equicontinuous if

$$\forall \epsilon > 0 \ \exists \delta > 0 \text{ such that} \\
|s - t| < \delta \text{ and } n \in \mathbb{N} \implies |f_n(s) - f_n(t)| < \epsilon.$$

The functions $f_n$ are equally continuous. The $\delta$ depends on $\epsilon$ but it does not depend on $n$. Roughly speaking, the graphs of all the $f_n$ are similar. For total clarity, the concept might better be labeled uniform equicontinuity, in contrast to pointwise equicontinuity, which requires

$$\forall \epsilon > 0 \text{ and } \forall x \in [a,b] \ \exists \delta > 0 \text{ such that} \\
|x - t| < \delta \text{ and } n \in \mathbb{N} \implies |f_n(x) - f_n(t)| < \epsilon.$$

The definitions work equally well for sets of functions, not only sequences of functions. The set $\mathcal{E} \subset C^0$ is equicontinuous if

$$\forall \epsilon > 0 \ \exists \delta > 0 \text{ such that} \\
|s - t| < \delta \text{ and } f \in \mathcal{E} \implies |f(s) - f(t)| < \epsilon.$$

The crucial point is that $\delta$ does not depend on the particular $f \in \mathcal{E}$. It is valid for all $f \in \mathcal{E}$ simultaneously. To picture equicontinuity of a family $\mathcal{E}$, imagine the graphs. Their shapes are uniformly controlled. Note that any finite number of continuous functions $[a,b] \to \mathbb{R}$ forms an equicontinuous family so Figures 92 and 93 are only suggestive.

The basic theorem about equicontinuity is the

**14 Arzelà-Ascoli Theorem** Every bounded equicontinuous sequence of functions in $C^0([a,b],\mathbb{R})$ has a uniformly convergent subsequence.

Think of this as a compactness result. If $(f_n)$ is the sequence of equicontinuous functions, the theorem amounts to asserting that the closure of the set $\{f_n : n \in \mathbb{N}\}$ is compact. Any compact metric space serves just as well as $[a,b]$, and the target space $\mathbb{R}$ can also be more general. See Section 8.