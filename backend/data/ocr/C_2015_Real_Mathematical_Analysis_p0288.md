Multivariable Calculus

This chapter presents the natural geometric theory of calculus in $n$ dimensions.

1 Linear Algebra

It will be taken for granted that you are familiar with the basic concepts of linear algebra – vector spaces, linear transformations, matrices, determinants, and dimension. In particular, you should be aware of the fact that an $m \times n$ matrix $A$ with entries $a_{ij}$ is more than just a static array of $mn$ numbers. It is dynamic. It can act. It defines a **linear transformation** $T_A : \mathbb{R}^n \rightarrow \mathbb{R}^m$ that sends $n$-space to $m$-space according to the formula

$$T_A(v) = \sum_{i=1}^{m} \sum_{j=1}^{n} a_{ij}v_je_i$$

where $v = \sum v_je_j \in \mathbb{R}^n$ and $e_1, \ldots, e_n$ is the standard basis of $\mathbb{R}^n$. (Equally, $e_1, \ldots, e_m$ is the standard basis of $\mathbb{R}^m$.)

The set $\mathcal{M} = \mathcal{M}(m,n)$ of all $m \times n$ matrices with real entries $a_{ij}$ is a vector space. Its vectors are matrices. You add two matrices by adding the corresponding entries, $A + B = C$ where $a_{ij} + b_{ij} = c_{ij}$. Similarly, if $\lambda \in \mathbb{R}$ is a scalar then $\lambda A$ is the matrix with entries $\lambda a_{ij}$. The dimension of the vector space $\mathcal{M}$ is $mn$, as can be seen by expressing each $A$ as $\sum a_{ij}E_{ij}$ where $E_{ij}$ is the matrix whose entries are 0, except for the $(ij)^{\text{th}}$ entry which is 1. Thus, as vector spaces, $\mathcal{M} = \mathbb{R}^{mn}$.