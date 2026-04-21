Logic

Among the most frequently used logical symbols in math are the quantifiers $\forall$ and $\exists$. Read them always as “for each” and “there exists.” Avoid reading $\forall$ as “for all,” which in English has a more inclusive connotation. Another common symbol is $\Rightarrow$. Read it as “implies.”

The rules of correct mathematical grammar are simple: Quantifiers appear at the beginning of a sentence, they modify only what follows them in the sentence, and assertions occur at the end of the sentence. Here is an example.

(1) For each integer $n$ there is a prime number $p$ which is greater than $n$.

In symbols the sentence reads

$$\forall n \in \mathbb{Z} \quad \exists p \in P \quad \text{such that} \quad p > n,$$

where $P$ denotes the set of prime numbers. (A prime number is a whole number greater than 1 whose only divisors in $\mathbb{N}$ are itself and 1.) In English, the same idea can be reexpressed as

(2) Every integer is less than some prime number.

or

(3) A prime number can always be found which is bigger than any integer.

These sentences are correct in English grammar, but disastrously WRONG when transcribed directly into mathematical grammar. They translate into disgusting mathematical gibberish:

(WRONG (2)) $$\forall n \in \mathbb{Z} \quad n < p \quad \exists p \in P$$

(WRONG (3)) $$\exists p \in P \quad p > n \quad \forall n \in \mathbb{Z}.$$

Moral Quantifiers first and assertions last. In stating a theorem, try to apply the same principle. Write the hypothesis first and the conclusion second. See Exercise 0.

The order in which quantifiers appear is also important. Contrast the next two sentences in which we switch the position of two quantified phrases.

(4) $(\forall n \in \mathbb{N}) \quad (\forall m \in \mathbb{N}) \quad (\exists p \in P) \quad \text{such that} \quad (nm < p).$

(5) $(\forall n \in \mathbb{N}) \quad (\exists p \in P) \quad \text{such that} \quad (\forall m \in \mathbb{N}) \quad (nm < p).$