8 Cantor Sets

Cantor sets are fascinating examples of compact sets that are maximally disconnected. (To emphasize the disconnectedness, one sometimes refers to a Cantor set as “Cantor dust.”) Here is how to construct the standard Cantor set. Start with the unit interval $[0, 1]$ and remove its open middle third, $(1/3, 2/3)$. Then remove the open middle third from the remaining two intervals, and so on. This gives a nested sequence $C^0 \supset C^1 \supset C^2 \supset \ldots$ where $C^0 = [0, 1]$, $C^1$ is the union of the two intervals $[0, 1/3]$ and $[2/3, 1]$, $C^2$ is the union of four intervals $[0, 1/9]$, $[2/9, 1/3]$, $[2/3, 7/9]$, and $[8/9, 1]$, $C^3$ is the union of eight intervals, and so on. See Figure 50.

$$C^0$$
$$C^1$$
$$C^2$$
$$C^3$$
$$C^4$$
$$C^5$$
$$\ldots$$

$$C$$
$$C$$
$$C$$
$$C$$
$$C$$
$$C$$

**Figure 50** The construction of the standard middle-thirds Cantor set $C$

In general $C^n$ is the union of $2^n$ closed intervals, each of length $1/3^n$. Each $C^n$ is compact. The standard middle-thirds Cantor set is the nested intersection

$$C = \bigcap_{n=0}^{\infty} C^n.$$

We refer to $C$ as “the” Cantor set. Clearly it contains the endpoints of each of the intervals comprising $C^n$. Actually, it contains uncountably many more points than these endpoints! There are other Cantor sets defined by removing, say, middle fourths, pairs of middle tenths, etc. All Cantor sets turn out to be homeomorphic to the standard Cantor set. See Section 9.

A metric space $M$ is totally disconnected if each point $p \in M$ has arbitrarily small clopen neighborhoods. That is, given $\epsilon > 0$ and $p \in M$, there exists a clopen set $U$ such that

$$p \in U \subset M_\epsilon p.$$