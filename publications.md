---
layout: page
permalink: /publications/index.html
title: Publications
---

<style>
.paper-block {
  display: flex;
  align-items: flex-start;
  margin: 24px 0;
  gap: 20px;
}
.paper-img {
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.paper-title {
  font-size: 1.25em;
  margin: 0;
  font-weight: bold;
  color: #333;
}
.paper-info {
  margin: 6px 0;
  color: #777;
  font-size: 0.95em;
}
.paper-links a {
  color: #0066cc;
  font-weight: 600;
  margin-right: 10px;
  cursor: pointer;
  text-decoration: none;
}
.paper-links a:hover {
  text-decoration: underline;
}
.abstract-box {
  display: none;
  margin-top: 8px;
  padding: 10px;
  background: #fafafa;
  border-left: 4px solid #0066cc;
  border-radius: 4px;
  font-size: 0.95em;
  line-height: 1.55;
}
.toggle-btn {
  cursor: pointer;
  color: #0066cc;
  font-weight: 600;
}
</style>

<script>
function toggleAbstract(id) {
  const box = document.getElementById(id);
  box.style.display = box.style.display === "block" ? "none" : "block";
}
</script>

<h2>📌 Publications</h2>

<!-- ===================== VLA-OS PAPER ===================== -->
<div class="paper-block">
  <img class="paper-img" src="./images/VLA-OS.png" alt="VLA-OS">
  <div>
    <h3 class="paper-title">VLA-OS: Structuring and Dissecting Planning Representations and Paradigms in Vision-Language-Action Models</h3>
    <p class="paper-info">
      Chongkai Gao, Zixuan Liu, Zhenghao Chi, <b>Junshan Huang</b>, Xin Fei, Yiwen Hou,
      Yuxuan Zhang, Yudi Lin, Zhirui Fang, Lin Shao
      <br>
      <i>The 39th Conference on Neural Information Processing Systems (NeurIPS 2025)</i>
    </p>
    <p class="paper-links">
        |
      <a href="https://neurips.cc/virtual/2025/loc/san-diego/poster/118219">Paper</a> |
      <a class="toggle-btn" onclick="toggleAbstract('abs_vlaos')">Abstract</a> |
      <a href="https://github.com/HeegerGao/VLA-OS">Code</a> |
      <a href="https://nus-lins-lab.github.io/vlaos/">Project Page</a>
    </p>
    <div id="abs_vlaos" class="abstract-box">
      Recent studies on Vision-Language-Action (VLA) models have shifted from the end-to-end
      action-generation paradigm toward a pipeline involving task planning followed by action generation,
      demonstrating improved performance on various complex, long-horizon manipulation tasks.
      However, existing approaches vary significantly, making it difficult to identify sources of performance gains.
      We introduce VLA-OS, a unified VLA architecture series enabling varied planning paradigms, and design extensive
      controlled experiments across diverse settings. Results show: (1) visually grounded planning representations
      outperform language ones; (2) hierarchical VLA achieves better performance and generalization, with slower speed tradeoff.
    </div>
  </div>
</div>

<!-- ===================== UniFaRN PAPER ===================== -->
<div class="paper-block">
  <img class="paper-img" src="./images/unifarn.png" alt="UniFaRN">
  <div>
    <h3 class="paper-title">UniFaRN: Unified Transformer for Facial Reaction Generation</h3>
    <p class="paper-info">
      Cong Liang, Jiahe Wang, Haofan Zhang, Bing Tang, <b>Junshan Huang</b>,
      Shangfei Wang, Xiaoping Chen
      <br>
      <i>ACM International Conference on Multimedia (ACMMM 2023)</i>
    </p>
    <p class="paper-links">
    |
      <a href="https://dl.acm.org/doi/10.1145/3581783.3612854">Paper</a> |
      <a class="toggle-btn" onclick="toggleAbstract('abs_unifarn')">Abstract</a>
    </p>
    <div id="abs_unifarn" class="abstract-box">
      We propose the Unified Transformer for Facial Reaction Generation (UniFaRN), which leverages multimodal
      inputs and a unified architecture to generate appropriate and diverse facial reactions in dyadic interactions.
      Our method balances reaction diversity and appropriateness through sampling strategies, ranking 1st in the REACT2023 Challenge.
    </div>
  </div>
</div>


## 🌱Early Project

<div style="display: flex; align-items: center; margin: 20px 0;">
    <!-- Image Section -->
    <img src="https://junshanhuang.com/projects/n_body/demo.png" alt="Project Image" 
         style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; margin-right: 20px;">
    <!-- Text Section -->
    <div>
        <h3 style="margin: 0; font-size: 1.5em; font-weight: bold; color: #333;">Parallel Computing Acceleration for N-Body Simulation</h3>
        <!-- Project Description -->
        <p style="margin: 10px 0; color: #555; font-size: 1em; line-height: 1.5;">Accelerate the N-Body simulation up to 2.2x compared to NVIDIA's default algorithm.</p>
            <!-- Links Section -->
        <p style="margin: 5px 0;">
            <a href="https://github.com/ctbfl/N_body_problem" 
               style="color: blue; text-decoration: none; margin-right: 10px; font-weight: bold;">Code</a>
            <span style="margin: 0 5px;">|</span>
            <a href="https://www.bilibili.com/video/BV1CyByYNEMC/" 
               style="color: blue; text-decoration: none; margin: 0 10px; font-weight: bold;">Demo Video</a>
            <span style="margin: 0 5px;">|</span>
            <a href="https://junshanhuang.com/projects/n_body/algorithm_manuscript.pdf" 
               style="color: blue; text-decoration: none; margin: 0 10px; font-weight: bold;">Manuscript</a>
            <span style="margin: 0 5px;">|</span>
            <a href="https://junshanhuang.com/projects/n_body/slides.pdf" 
               style="color: blue; text-decoration: none; margin: 0 10px; font-weight: bold;">Slides</a>
        </p>
	</div>
</div>

<div style="display: flex; align-items: center; margin: 20px 0;">
    <!-- Image Section -->
    <img src="https://junshanhuang.com/projects/paper_robot/demo.png" alt="Project Image" 
         style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; margin-right: 20px;">
    <!-- Text Section -->
    <div>
        <h3 style="margin: 0; font-size: 1.5em; font-weight: bold; color: #333;">Emotional Companion Robot</h3>
        <!-- Project Description -->
        <p style="margin: 10px 0; color: #555; font-size: 1em; line-height: 1.5;">
            Simple paper robot that could provide physical and emotional companionship to you.
        </p>
        <!-- Links Section -->
        <p style="margin: 5px 0;">
            <a href="https://github.com/ctbfl/paper_robot" 
               style="color: blue; text-decoration: none; margin-right: 10px; font-weight: bold;">Code</a>
        </p>
    </div>
</div>

<div style="display: flex; align-items:center; margin: 20px 0;">
    <!-- Image Section -->
    <img src="https://junshanhuang.com/projects/robogame/demo.png" alt="Project Image" 
         style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; margin-right: 20px;">
    <!-- Text Section -->
    <div>
        <h3 style="margin: 0; font-size: 1.5em; font-weight: bold; color: #333;">Robot for a Curling Game Competition</h3>
        <!-- Project Description -->
        <p style="margin: 10px 0; color: #555; font-size: 1em; line-height: 1.5;">
            A robot that can fetch the curling and push it to get score.
        </p>
    </div>
</div>

<div style="display: flex; align-items: center; margin: 20px 0;">
    <!-- Image Section -->
    <img src="https://junshanhuang.com/projects/bomber_game/demo.png" alt="Project Image" 
         style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; margin-right: 20px;">
    <!-- Text Section -->
    <div>
        <!-- Project Title -->
        <h3 style="margin: 0; font-size: 1.5em; font-weight: bold; color: #333;">Bomberman -- The power of books (Game)</h3>
        <!-- Project Description -->
        <p style="margin: 10px 0; color: #555; font-size: 1em; line-height: 1.5;">
            An adventure game with intriguing characters, formidable enemies, and unique mechanisms. 
            Use bombs and harness the power of books, overcome all obstacles, and save the campus!
        </p>
        <!-- Links Section -->
        <p style="margin: 5px 0;">
            <a href="https://www.bilibili.com/video/BV12zB2YjEDz" 
               style="color: blue; text-decoration: none; font-weight: bold;">Demo Video</a>
            <span style="margin: 0 5px;">|</span>
            <a href="https://junshanhuang.com/bomber_game/Bomberman--The%20power%20of%20booksV1.0.2(for%20windows).zip" 
               style="color: blue; text-decoration: none; font-weight: bold;">Game Download</a>
        </p>
    </div>
</div>

