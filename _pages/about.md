---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a first year PhD student of [Perception and embodied INtElligence (PINE) Lab](https://pine-lab-ntu.github.io/) at [Nanyang Techological University](https://www.ntu.edu.sg/). Before that, I received my Bachelor and Master degree from [Shanghai Jiao Tong University (SJTU)](https://en.sjtu.edu.cn/), ranking top 20%.

I am currently advised by [Prof. Ziwei Wang](https://ziweiwangthu.github.io/), and working closely with [Prof. Yiling Xu](https://scholar.google.com/citations?user=638kRwkAAAAJ&hl=en) and [Rui Ye](https://rui-ye.github.io/). My research interests lie in embodied ai, world model, media perceptual quality assessment (e.g., 3D point cloud, image) and low-level vision. Specifically, I focus on world model and mobile manipulation.

I am actively seeking opportunities for Research Internship, please feel free to contact me!!!

## 🔥 News
- *2026.04*: Our paper (DockAnywhere) is accepted by **RA-L**!
- *2026.02*: Our survey on VLA+RL is released!
- *2025.04*: Joined PINE @ NTU!
- *2024.09*: I am honored with China National Scholarship 2024! 
- *2024.09*: One paper (DisPA) is accepted by **NeurIPS2024**! 
- *2024.03*: One paper (PAME) is accepted by **ICME2024 (Oral)**! 
- *2024.02*: One paper (CoPA) is accepted by **CVPR2024**!
- *2023.05*: One paper (GPA-Net) is accepted by **IEEE Transactions on Visualization and Computer Graphics (TVCG,CCF-A)**! 

## 📝 Selected Publications 

<sup>\*</sup> denotes equal contribution, <sup>†</sup> denotes corresponding author.

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">RA-L</div><img src='images/dockanywhere.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

DockAnywhere: Data-Efficient Visuomotor Policy Learning for Mobile Manipulation via Novel Demonstration Generation

**Ziyu Shan**, Yuheng Zhou, Gaoyuan Wu, Ziheng Ji, Zhenyu Wu, Ziwei Wang<sup>†</sup>,

- [**\[pdf\]**](https://arxiv.org/abs/2604.15023)[**\[code\]**](https://github.com/zyshan0929/DockAnywhere)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arixv</div><img src='images/survey.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Point Cloud Compression and Objective Quality Assessment: A Survey

Yiling Xu<sup>†</sup>, Yujie Zhang, Shuting Xia, Kaifa Yang, He Huang, **Ziyu Shan**, Wenjie Huang, Qi Yang, Le Yang

- [**\[pdf\]**](https://arxiv.org/abs/2506.22902)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS</div><img src='images/dispa.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Learning Disentangled Representations for Perceptual Point Cloud Quality Assessment via Mutual Information Minimization

- **Ziyu Shan**<sup>\*</sup>, Yujie Zhang<sup>\*</sup>, Yipeng Liu, Yiling Xu<sup>†</sup>

- [**\[pdf\]**](https://arxiv.org/abs/2411.07936) [**\[code\]**](https://github.com/zyshan0929/PAME)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR</div><img src='images/CoPA.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


Contrastive Pre-Training with Multi-View Fusion for No-Reference Point Cloud Quality Assessment

- **Ziyu Shan**, Yujie Zhang, Qi Yang, Haichen Yang, Yiling Xu<sup>†</sup>, Jenq-Neng Hwang, Xiaozhong Xu, Shan Liu

- [**\[pdf\]**](https://arxiv.org/abs/2403.10066) [**\[code\]**](https://github.com/zyshan0929/GPA-Net)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICME</div><img src='images/PAME.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

PAME: Self-Supervised Masked Autoencoder for No-Reference Point Cloud Quality Assessment <font color='red'> (Oral) </font>

- **Ziyu Shan**, Yujie Zhang, Qi Yang, Haichen Yang, Yiling Xu<sup>†</sup>, Shan Liu

- [**\[pdf\]**](https://arxiv.org/abs/2403.10061) [**\[code\]**](https://github.com/zyshan0929/PAME)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP</div><img src='images/MFT-PCQA.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

MFT-PCQA: Multi-Modal Fusion Transformer for No-Reference Point Cloud Quality Assessment
- Yating Liu<sup>\*</sup>, **Ziyu Shan<sup>\*</sup>**, Yujie Zhang, Yiling Xu<sup>†</sup>

- [**\[pdf\]**](https://arxiv.org/abs/2210.16478)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TVCG</div><img src='images/GPA-Net.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

GPA-Net:No-Reference Point Cloud Quality Assessment with Multi-task Graph Convolutional Network

- **Ziyu Shan**<sup>\*</sup>, Qi Yang<sup>\*</sup>, Rui Ye, Yujie Zhang, Yiling Xu<sup>†</sup>, Xiaozhong Xu, Shan Liu

- [**\[pdf\]**](https://arxiv.org/abs/2210.16478)
</div>
</div>

## 🎖 Honors and Awards
- *2024.10* China National Scholarship.
- *2023.10* SJTU Scholarship A Prize (Graduates).
- *2022.06* Outstanding Graduate of Shanghai Jiaotong University.
- *2022.06* SJTU Scholarship B Prize (Undergraduates).
- *2021.09* Ceyear China Scholarship.

## 💻 Services
- Reviewers for:
  - TPAMI, TIP, TAI, TCSVT, TOMM, Neurocomputing.
  - NeurIPS, AAAI, MM, ICME

