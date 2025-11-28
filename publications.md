---
layout: page
permalink: /publications/index.html
title: Publications
---

<script>
function toggleAbstract(id) {
  var box = document.getElementById(id);
  if (!box) return;
  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}
</script>

<div style="max-width: 900px; margin: 0 auto;">

  <h2>📌 Publications</h2>

  <!-- ===================== VLA-OS PAPER ===================== -->
  <div style="display: flex; align-items: flex-start; margin: 20px 0;">
    <img
      src="https://junshanhuang.com/images/VLA-OS.png"
      alt="VLA-OS"
      style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; margin-right: 20px;"
    >
    <div>
      <h3 style="margin: 0; font-size: 1.5em; font-weight: bold; color: #333;">
        VLA-OS: Structuring and Dissecting Planning Representations and Paradigms in Vision-Language-Action Models
      </h3>
      <p style="margin: 6px 0; color: #777; font-size: 0.95em;">
        Chongkai Gao, Zixuan Liu, Zhenghao Chi, <b>Junshan Huang</b>, Xin Fei, Yiwen Hou,
        Yuxuan Zhang, Yudi Lin, Zhirui Fang, Lin Shao
        <br>
        <i>The 39th Conference on Neural Information Processing Systems (NeurIPS 2025)</i>
      </p>
      <p style="margin: 5px 0;">
        <a href="https://neurips.cc/virtual/2025/loc/san-diego/poster/118219"
           style="color: blue; text-decoration: none; margin-right: 10px; font-weight: bold;">
          Paper
        </a>
        <span style="margin: 0 5px;">|</span>
        <a href="javascript:void(0);"
           onclick="toggleAbstract('abs_vlaos')"
           style="color: blue; text-decoration: none; margin-right: 10px; font-weight: bold;">
          Abstract
        </a>
        <span style="margin: 0 5px;">|</span>
        <a href="https://github.com/HeegerGao/VLA-OS"
           style="color: blue; text-decoration: none; margin-right: 10px; font-weight: bold;">
          Code
        </a>
        <span style="margin: 0 5px;">|</span>
        <a href="https://nus-lins-lab.github.io/vlaos/"
           style="color: blue; text-decoration: none; margin-right: 10px; font-weight: bold;">
          Project Page
        </a>
      </p>
      <div
        id="abs_vlaos"
        style="display: none; margin-top: 8px; padding: 10px; background: #fafafa;
               border-left: 4px solid #0066cc; border-radius: 4px;
               font-size: 0.95em; line-height: 1.55;"
      >
        Recent studies on Vision-Language-Action (VLA) models have shifted from the end-to-end
        action-generation paradigm toward a pipeline involving task planning followed by action generation,
        demonstrating improved performance on various complex, long-horizon manipulation tasks.
        However, existing approaches vary significantly, making it difficult to identify sources of performance gains.
        We introduce VLA-OS, a unified VLA architecture series enabling varied planning paradigms, and design extensive
        controlled experiments across diverse settings. Results show: (1) visually grounded planning representations
        outperform language ones; (2) hierarchical VLA achieves better performance and generalization, with a slower speed tradeoff.
      </div>
    </div>
  </div>

  <!-- ===================== UniFaRN PAPER ===================== -->
  <div style="display: flex; align-items: flex-start; margin: 20px 0;">
    <img
      src="https://junshanhuang.com/images/unifarn.png"
      alt="UniFaRN"
      style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; margin-right: 20px;"
    >
    <div>
      <h3 style="margin: 0; font-size: 1.5em; font-weight: bold; color: #333;">
        UniFaRN: Unified Transformer for Facial Reaction Generation
      </h3>
      <p style="margin: 6px 0; color: #777; font-size: 0.95em;">
        Cong Liang, Jiahe Wang, Haofan Zhang, Bing Tang, <b>Junshan Huang</b>,
        Shangfei Wang, Xiaoping Chen
        <br>
        <i>ACM International Conference on Multimedia (ACMMM 2023)</i>
      </p>
      <p style="margin: 5px 0;">
        <a href="https://dl.acm.org/doi/10.1145/3581783.3612854"
           style="color: blue; text-decoration: none; margin-right: 10px; font-weight: bold;">
          Paper
        </a>
        <span style="margin: 0 5px;">|</span>
        <a href="javascript:void(0);"
           onclick="toggleAbstract('abs_unifarn')"
           style="color: blue; text-decoration: none; margin-right: 10px; font-weight: bold;">
          Abstract
        </a>
      </p>
      <div
        id="abs_unifarn"
        style="display: none; margin-top: 8px; padding: 10px; background: #fafafa;
               border-left: 4px solid #0066cc; border-radius: 4px;
               font-size: 0.95em; line-height: 1.55;"
      >
        We propose the Unified Transformer for Facial Reaction Generation (UniFaRN), which leverages multimodal
        inputs and a unified architecture to generate appropriate and diverse facial reactions in dyadic interactions.
        Our method balances reaction diversity and appropriateness through sampling strategies, ranking 1st in the REACT2023 Challenge.
      </div>
    </div>
  </div>

  <h2>🌱 Early Projects</h2>

  <!-- ===================== Early Project 1 ===================== -->
  <div style="display: flex; align-items: center; margin: 20px 0;">
    <img
      src="https://junshanhuang.com/projects/n_body/demo.png"
      alt="Project Image"
      style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; margin-right: 20px;"
    >
    <div>
      <h3 style="margin: 0; font-size: 1.5em; font-weight: bold; color: #333;">
        Parallel Computing Acceleration for N-Body Simulation
      </h3>
      <p style="margin: 10px 0; color: #555; font-size: 1em; line-height: 1.5;">
        Accelerate the N-Body simulation up to 2.2x compared to NVIDIA's default algorithm.
      </p>
      <p style="margin: 5px 0;">
        <a href="https://github.com/ctbfl/N_body_problem"
           style="color: blue; text-decoration: none; margin-right: 10px; font-weight: bold;">
          Code
        </a>
        <span style="margin: 0 5px;">|</span>
        <a href="https://www.bilibili.com/video/BV1CyByYNEMC/"
           style="color: blue; text-decoration: none; margin: 0 10px; font-weight: bold;">
          Demo Video
        </a>
        <span style="margin: 0 5px;">|</span>
        <a href="https://junshanhuang.com/projects/n_body/algorithm_manuscript.pdf"
           style="color: blue; text-decoration: none; margin: 0 10px; font-weight: bold;">
          Manuscript
        </a>
        <span style="margin: 0 5px;">|</span>
        <a href="https://junshanhuang.com/projects/n_body/slides.pdf"
           style="color: blue; text-decoration: none; margin: 0 10px; font-weight: bold;">
          Slides
        </a>
      </p>
    </div>
  </div>

  <!-- ===================== Early Project 2 ===================== -->
  <div style="display: flex; align-items: center; margin: 20px 0;">
    <img
      src="https://junshanhuang.com/projects/paper_robot/demo.png"
      alt="Project Image"
      style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; margin-right: 20px;"
    >
    <div>
      <h3 style="margin: 0; font-size: 1.5em; font-weight: bold; color: #333;">
        Emotional Companion Robot
      </h3>
      <p style="margin: 10px 0; color: #555; font-size: 1em; line-height: 1.5;">
        Simple paper robot that could provide physical and emotional companionship to you.
      </p>
      <p style="margin: 5px 0;">
        <a href="https://github.com/ctbfl/paper_robot"
           style="color: blue; text-decoration: none; margin-right: 10px; font-weight: bold;">
          Code
        </a>
      </p>
    </div>
  </div>

  <!-- ===================== Early Project 3 ===================== -->
  <div style="display: flex; align-items: center; margin: 20px 0;">
    <img
      src="https://junshanhuang.com/projects/robogame/demo.png"
      alt="Project Image"
      style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; margin-right: 20px;"
    >
    <div>
      <h3 style="margin: 0; font-size: 1.5em; font-weight: bold; color: #333;">
        Robot for a Curling Game Competition
      </h3>
      <p style="margin: 10px 0; color: #555; font-size: 1em; line-height: 1.5;">
        A robot that can fetch the curling and push it to get score.
      </p>
    </div>
  </div>

  <!-- ===================== Early Project 4 ===================== -->
  <div style="display: flex; align-items: center; margin: 20px 0;">
    <img
      src="https://junshanhuang.com/projects/bomber_game/demo.png"
      alt="Project Image"
      style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; margin-right: 20px;"
    >
    <div>
      <h3 style="margin: 0; font-size: 1.5em; font-weight: bold; color: #333;">
        Bomberman -- The power of books (Game)
      </h3>
      <p style="margin: 10px 0; color: #555; font-size: 1em; line-height: 1.5;">
        An adventure game with intriguing characters, formidable enemies, and unique mechanisms.
        Use bombs and harness the power of books, overcome all obstacles, and save the campus!
      </p>
      <p style="margin: 5px 0;">
        <a href="https://www.bilibili.com/video/BV12zB2YjEDz"
           style="color: blue; text-decoration: none; font-weight: bold;">
          Demo Video
        </a>
        <span style="margin: 0 5px;">|</span>
        <a href="https://junshanhuang.com/bomber_game/Bomberman--The%20power%20of%20booksV1.0.2(for%20windows).zip"
           style="color: blue; text-decoration: none; font-weight: bold;">
          Game Download
        </a>
      </p>
    </div>
  </div>

</div>
