import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/Carousel/Carousel"
import ProjectCardWrapper from "../components/ProjectCard/ProjectCard"
import {
  PortfolioWrapper,
  StyledPortfolioImage,
  StyledPortfolioContent,
  StyledPortfolioTitle,
  StyledPortfolioDescription,
} from "../components/portfolioStyles"

// NoDB project
let nodb1 =
  "https://lh3.googleusercontent.com/fd8eVBcYPTpDi5pens-SP6NrTqxxkIe27YBBLw02Mn7qiwpKctHlLu8djpPwkSqZVYr8oDnsk_8l_2XjyJwI_H5B6nyCXzS25nnCMuhNsdNoJytulLhVuSl96yne88YExgaDeeWL2hIWZO6kUF6m6EuvVwR4An45jupRZqgtwu7o4Wb35rfz_0OR7qmbvA3oLxM1obSgdMkNrT4zGetWLyUSw7e_oMTFQHMDbT6rUeEAEj3RMljKHiXsfOn94hdBOPaFoI1Hxrkw6xc0WB1OQI-cp7XL8qDwTaK8OSzJv_gnZaCFhxjzZdSPyVSQB3drOi9zbFf-rCRIvACnTklVn-ux0RZD7kDNw-BHMjPbo6XNZFx5hWQYX-iz0w8hCkpZhSu893DGBFzqNZLR7FaJUDrMO1_VPuUD9ZisQsz2mhLvMDzax-J-i5b38Jo-IWOM5hJ6XQYJPAFRmqFJbEAIy7kB6i5J8rzN6jwdj4tP3kd34JGKpOeBXlDSBbyBuM8RRy4x7A9t3h8mFj5qWT662skhUi1uYE3thI6_pYVb4eSAwzscW5nUwrE3Uiztyr9dAqk_M-ZQjjnLXWDAoTfHweUIWc8LWnWeQg4mobJyI46cdKfoclLvFT45MHdQ5WunPuR4wCTPPwqZr4xYq8mkpLOPUa0m21FhloIXdeZ9ejldxpM28JParZo=w1913-h962-no"

// Personal Project
let persproj1 =
  "https://lh3.googleusercontent.com/JNONBqclO68d8M9oJZBMk_an2jcC241pxUeD8P3D4OD6lX9FIfB4iwYtH96U7nrqvuoSei1RejLfz5uTYyRQFkchO4pvMSUIowTlJ8YfTY3BKS0CGEpIg0CZd48ym4ZYkM4g0DEwXrFPtc6k7wYKOhTZDcD96JuHPerX7aHN6sZ3RyRi-19os7l3e3qecoXImZwMsYbHtxdNvgd8bedMn5OgcgZMl1LCzn9A72XepQVY3mM8vBD5ztZkOJQlIzwuoUBKfeG97zPJGsG9kTKerymZunC6Wu-RASu2s04UZes0ZLqjx1iiGDHgcNgn76IPPnO-Um4TFeD_ScHFaKj6zXfxNZ83D8RpYSLJDBBlc86l4-VLdI9l9pq0rS7qBSDrzjywwM5ag3CFVT5U-wpr3Hp6JZp1hT56lH55CScWCe1M0Kyi_zDCBIKVE4zsBLxs3-GVL5pOi86OQ9LicmRh0GjZx1rvConHcwTcED_r8qLZtjY4EvIp1LSb1oqWwC4l3sbR4hM7SKlp5PvhAodSBOpYBZ_497U1ru4gq_pl54MPdEkGoDfsexw8Q7wjsPXwELZ87WJKcym7RCpJ3WAjLfyoil61M5sjC9hbfWosJ4VRboy3nF0y3rIaxphTjBSGqxiyYxCVE_a8wm_MDVjuvlQfz_EDtoQSsEIb5eNs7bI3xwySnnAkoLo=w1913-h962-no"
let persproj2 =
  "https://lh3.googleusercontent.com/EO_aM-HrWYexkQaN2A6v_UjSFj4myC1ic5L1DbEnwX3ba2B3nvuKhfd6iARkzJjGiBCFDxuJ8NocTPX2vNNIp1GlZbzy9SuQY__xLbuSYRbB-hzH_IMWXVONHjaFzI4L-MPRkmaHFscCjR_cy0xUow3V4djtvdDDfq_avh8I-6rY8jP6p-Kl7biI-fhKZ4Jfy5Fk1QXocECh0YAUBSiww-PQPdvBA26mGKKbKt3ut2FXQ4r5NkidNFy2amHOFUhFwbxqse_eno_OdbvSkVVq_eMkTCXI0SJ4dlETjGxt7iAJ8G9UTeRDyw1YPPZdZbENfRqk8NFha85-in5TV3SvQrq7Y-7FMPXer9iOrE1C0ACgtKJ-sRYmBq5rh-DjhOTRyYlkoOdR3wmYNCWapE2AZJGw2OGUV0-kWsIN9D48pd-Zobjs5E2VLX7I3ppCTxO5a0kJykpSBN5WcHpR1ynSJR6mI5PCQ_-Bce-X9AQDfYRpwyifFsYLcOSuhvnCdDBMfp-g78uodM5PcZ15PA83X_Vzwqc75aVRxDcabup96OX7lT8CfP1YcDEq_geHtEBIh_WlXRIcQmK3d_FD8jgaPz4ihxoo23f43w_yOkI04fDB9qg1v_5lDSXHgd0fwJfPkkHCA-lzOyLulclXsclMg7Xj2IwF5mlq3_4Ak2SfaMDCcYgWJbfpMIY=w1913-h962-no"
let persproj3 =
  "https://lh3.googleusercontent.com/BDL6l3HWRODBdVY9CV8_84ifI7aTNuGliD1T98aAKYtmZOC_bYoS_ziySahGA7DEpSeQRlFblDKHeRsBE5R4hZLRlad4Y98twNNrmrvB5EwCmo0SInBxHxYccKNGRWryfPWxmUx38-Pwbrev-KjMrzcS2Zmn53j8X6U_VsuFL7cWrtF0M_WVDCUB9tib65H4cjW5jDGukm2RcoPMvjyEme45DlKMHQenjoH2FPdVsT9D7JM4xKJk4inGBG87IFYNtnqVwZ7RZ_e1-HR48c1X5CIK2QOXLar8bwFh9EpYkoiIYzZveriwIUrAnDwXC1eHhn18Cr0ZwTgWCwqmlczxaFbIqI0Bs4jNx0U2MDtzqpTxDz9x_8cye3u5rxgJ3Iu8ZuYLHrq-9RyMHw4JXnsLRpILg4Fb37ceC0hAwaxaZa1MkRRP7S3BwK1oNuQskH65h0Ue8-YjKkuwQYbf1DXo5Fiw7BOeE7LrJe1CBGfqaA7rkd775f-hSstuHz24ESqLFTVeTntO5gLwfYP1BemFPjEv-a0PzStFf3wk7FtjpMIGgLF4QYsLcjcnxUt9Qpq8GSDYtsu-3p1atiu6ScASGgsWe6MRW-X4UpUIpG-cKlLTy2cp12vYY6aAiqnhcaoWISFohPec8Wt4NHa5KHxXWGxjHYh_JaE8LhIwDxsGIQtox4X7MgWSJEw=w1913-h962-no"
let persproj4 =
  "https://lh3.googleusercontent.com/bsunwx89SwUeBF_1aQQQBmkrChWEqUpqPOgNU3PvRLYDK2cbhKH9Z2jA9zEO6er9IusIOSEAe6MO_DKInu0_253eGRm1JpS-pYET4NA-8cUrCV7U304660VB6YSLTQEHZWX-TRRcpxYA43KQAhmSa_FBvXx8V8Jc66FpoLzZREMZzFgI1FpHgb-FGI-LEst4ae3SA4jcQYakn_Suu7GZmW59mfyBQxnihpslptcaB1gpFArG6RKKcr-p9c2Xj-UWCvdyvPKZf-Z3JzPCzKdgQXhHiGw5XdQXx3ONr23zJBmihY7nZ77Z7Ayy_Kk7-31TFffIK7-TzvwbpfLQFHIu9X_f2vbmkaAmhhcXTlHRtVvpD0d1sL1MM6qKUuhVQbcap3gc2PNo1fuwPUgId0OjAroFLv4qEYumr4I5YZ4rJyiH4zqjpeg9vwktrnLGAmQHw6oCwD-lAWrQ0Oa2HC4b6BQO51TWLZ9MrJ_Fu5jRVmTTSSayEVnatROmCYjZgXKb4G15dCyk2nTTS9aKAKKm5R4icypM2dB_2QqVjeTjnoh-aRqmSM9NJk7UlOrFAuUIMYhxJGuTyX8yjETaz68kRJzxpIclg_RvYb_NHJhaseLbxIIedkHw8FLn8-2kRA_ZgsyRcZNNrN7EuO-2MS4nyVMgVfi8aXd9UNlXxDLXZpvMtnYWHqjBR1s=w1913-h962-no"
let persproj5 =
  "https://lh3.googleusercontent.com/RtAGNLfYWbjpSy9ICZGVJyMPIBTt6VfFsKI9iWsznKjQvWCfN4QSMBqCruw9230aXol5gQsGn3lliPVhf8E0QaxH-WtHAVLpuA_Cxe0Wkbo63KSCIm92_9RI2dqO_pSNztoReBa5sKMARFcH3OL4wAtAo4aUGaAp9p73Kzso-HdwaiawOMK507TCTq0I1B78BhAm0pt5Cfx6LMiFu5s6qcD0Ymfu8gORJad5obzyX8ayxau6STbfMjQgE4WZC_mESSBrhLEyLB9xtmcBtyAP0sw7CEu2jQ2qd41O3GpwkIg7B1g17EXG_gNYJgkq2PIKdYzx607auQJ9YW4pkLByL9vIbyhPXXSZOQnBy4FlpqrmOvd9vJZUGQLJPKmSgaUUGu6ALKROUCoFFGXHEKq5_Hj49RXthQ7rMc0nF4EpsoiEH7ApNg_ee3mNsEpEGV-_0w4mAzCI9ySVYPI1LboOhyrGMkW-uxVIBxz19GrdJQmGGgOn_I-zm0tTCwdykqzPkV0LcWw095VihxqMnWkZYemQwrXJ2NaNr2-RqdBqLwZfPoX7xe4XsLZj3-_9PDKiuV5B7-tkLS8r6yPR654-xgW1Ph3k9LgJwFiew4taXVwguDbXvv4IUWEAPAFuN6dhLBuE6r1wxoaOaDUq6I2hoqGKI2Dgb8KY64mA7kT5C-hhMZfkS8qjMVE=w1913-h962-no"

// Group Project
let groupProj1 =
  "https://lh3.googleusercontent.com/N335ax5yNzjtvHOMcv4ejtdtl5RLITKSsbjKJx6QPMx1fOOxToakr_krnasIcWVc_BTscGvQ3GKuzTgjGb8gG3Ym3bkvlQPFyuvF01W2gCLNgT98jkDDTybCPTSP4DMx9r0x4qfokDY1xtAi76GgBTbC2UB6YMgwtIek0HmAqWBd6Q48u8qRvPX6SLybsHN37Qj4NOYwB8B_K3dvBNmivO_rjRJJsHVU4c8D2D6jXp6aVpb83zuvfkSXUKurlNQy8V4NgvavVn7MTMvRtF-zsCJW73Y9_5Lxv4FcRRP5-j62LMY111owbL0UclrANH3LpdJ598yGVXGUXeCoATQu9Lj8c1qvji-MqrUDvHNq96Ms0ylY9ehPuRwAaeVMF3sAvKWElCwVdmcWUMUYxilDq9KdxiPcjX4axF1EUy9tN8B7cUK6E1x1gQl2BQXW_00NjtxRcOfLuItt4dPmX07AsbbEJN4F1J3OlOJXbV3nZCH6rZIKWDKe7Hx7VSqCffv3UGpcY_PyIpDDveEXR8bCD-lWjcD87FURYXVLL3RG4KODjVpgKfu8N1Q0b49Lk0L53pZtq0ToODryrl8W1vBMehio-igul6Wn2FXkMogk1MJWIPRGC5olhKZR0x3asrKc7lWVZxVgc1WPFI-9r64UP7hvgysNNwzxO5Pye06SCdE_xCTZu4sRXqk=w1913-h962-no"
let groupProj2 =
  "https://lh3.googleusercontent.com/fjN-fzfp6SFzfMxnqVqsnFGhs59vV_ckj5LCcrqt-v1XXqWX4VR7PTUcDKy9MmP6s2cayXLKhaLKiBMSRS66Herh6s-fdN5skuvrza51rUGwG1uPFgZPVyDO5M0m-YG5wSD40cGp6VuTT7aIGuUWKE8wdfucB0B8pJ8gV33NiF5SrdM4JhMKtq-sMOoN1zyP4WB0CkttrVbmjojkOmeYdjNc81CxIuZ0rBnT2m_MPZIYUueBI8LWc8QDd1wlj9MVXPIJhX2tmJ_TTZL2DCzntIeJB4tsrwaeIbz_LyBUIAxwouqbdYZxTckmJ4L10D8lqyOsFnyhT9WwfhCluTPqxNRnVRKReDI8uR_g0-J_twfi76zwt8nPRZJuryaPO8euFkkaX0qYU27W72imt5mNOcP7W_HCDKXwc9whhWAuNe4aiDfQMS8nowGAobjtWNRTRDzDDFcvXwpkssqwIgyky003cQThhPVbKvYaZFkJwAaxg0KWuPmNphIj0GcSylmepTDxCpal2AT0SJsM8Sz4WRkVhMjqfzWu2SmlbgmIXTn13TUCuDzlwzDLYs1z6Ghmo4eknDwoldAwFSzzNtIIPFPvFp9--weFP5f69YjmQTaJzoU5ARxXJIVPSFdcKW2nkMv1HcyM9Ze4dyTOrjWBIQNsiqxlshawMARlCWZg-ml53C0nvzm6ioE=w1913-h962-no"
let groupProj3 =
  "https://lh3.googleusercontent.com/nHWIUcFTvqKmOfAsyIoNiAp_V5c9HFvHtX9BN8cLXz3S9eizHG2S27n_roWoSoNz4DX58rK44Peh4AD2WbXO-305CggBX3ApQ53rnNYMrnyVX5DwoE7BLOn3zDSSdPA8VP_94RSdBZW7WT-Q7JJYbcl36rTJgU8kdVBSN_rH3lr9o_cCND0kWmFBUO9v69zoFOkn3VYanN-nBgnZi9quQlqcdqdPgpeRFxCZg5e-Efog0MqziupSLBqzaMaalMXyYuEjdns7B27Ke5Dd0wuqxNiureOn38zzeLvDp29stBoCNwBst08kQjFMgwWe2-8mgWFcgUSMQOwBvHU-_1Vrp9ZO0xEhi2Vod2j1DI-kqZRaZWX4vM6b2HUNCqNbXJjAMi4XpCf0J2F8Ctl0Y00j2vrjBVwjsiJOoxpF858EsAKj37pCEvwlJKp7w-o-sfr5zYHBJpr42vEgO3zYQ4ZFVUF63Xz44_-KFC9ag2Ca_NAxItQXK-VAHx6b5Ul5ZkuCUPjDd6fOHKSwgqG1Fla0JNHdEVPwUpjVUIyNpRs03YVXfwWbMo_S8fPOhMVM_iD7T2EhxHFQA8cInjA5KfLHK2FDC2r3DozbTM3CKxVuqr1tIaLDQ6BQ3mFa6bPGQLps5C4p0YaPf3Nd481j_tVlWCxXd-pneS-vzOMVJD1eJJ_8s5jMLtCPzCA=w1913-h962-no"
let groupProj4 =
  "https://lh3.googleusercontent.com/HH_GGuWDUfu7OReGmwlcT4KJkDmNx9ydZ0wFn0UwqrKY7GKBq12d_Wl5oFrx8jeyd71UVM7fIhPmO0AW-0MOetRas4u9bawiR86A9Cuniodq_SF8haSe0zMFtySvszNMTIPcEs2P_2a_-xrajdCBQwnT_Eh_ZCPJ0gUCGT68TGxfTL2IXoNAbTr_885CMBvT4sO9o_w5aDV0M_iyM6MT9nqeN6FeT-gacMiacrcEWaG66i4LbEFO9L7wQtipzjVmhElPO2z-JSyDdwfFhXE06uteObnuvwMq3MWGIGoUr3q25-vyKbkncMl4XZmoFx4oepIrznlRXTHKujcKQ9u3INcb40KqpvGcGKcTBMWbaMJMXGzsOHIkPiu08Qyu2_zEq9RvRsecmYtM7ZB4ooNEBRGDNlYPkFt4klMDBT6oNYsyUGNXMq7_c3LwNXrxe5iivXn1DzUc1hLdD43aMTH3wpLfkNj_RrZtW8yFxNxWEEWC6_sqir-qjHuHy3BudQdpiRLzvFI6HTsZVSN92u-1vS12zE5vBe4nhGE3OOVDyNCPU-q16dW9sv7I6YbKrDzHSSid38dwbHeMTUrO4SkjOGtLwwh4pNBs_NGZiB8J9bzefwHMFBg6n6XspU94xN7jRNltixg2tZlDGkRjvc7jEMdEnagP4j18btELCF3C4ME5CPTVGQyk098=w1913-h962-no"
let groupProj5 =
  "https://lh3.googleusercontent.com/M94pkPID6GWs4Gtv3ieJAr4SvKCED-IuBwKdAzFVbrOHxXPsL2DbxhSJr_hHILJ6PirTPXm3DTCsHve5QRDFlRRh8XhVPC4L01ECIbUWy81NMfZHuJz-jdeXxbsYFvjEzhGWM4aIQdtSU-Aim2QnFJ-erCWngqluUTanKtfC_WisK9NpbGu-Eon_AvNC0ohkHPSJKci9sMdQjCR0URZyUpijAb4NvXYifY0ufLEFKd1y7DcO0mxqlleoMGYuJh7W_GvPdf_WSLifo3gxI3r4UniBdkLCVS-xTSMRSXFmS9nXrPXFzHXJDbeTSQCBl5QnhEp7G_q1kqJS0rthTennURaYk9EOnxihsIiPYSiKvQJI9Zc81nu4uk_Xe88nmvNRcWE32-EKgEdH2HtinmCP3IQa8CWxpsDhEMBRdAzfedEv_PK86ZrEaq5W_PhMjq3CQJBtKNoNVV4LT7Md9VzAhGTbpLwCpHHxqHqMeEFCklG_M88UOXIZ7FjF3eYgiKFgCTjYk4fh85V4PlGdW_g1Sb93J8ojBFRYQEp-orHZF7EinheHh0AdEOl951whHuXQWLZ4fl10XsO9-iGA99M8BzgKiG7rDbRdILJ5upleWW_ZTTrq-6Qo9Rsc9kCrnr0B7WuCVFcy2L4JlY1ehmsW-wLLYWz3A3KinA5zNcXmwo-8rqUbIitpvOc=w1913-h962-no"

const nodb = [nodb1]
const persProjPic = [persproj1, persproj2, persproj3, persproj4, persproj5]
const groupProjPic = [
  groupProj1,
  groupProj2,
  groupProj3,
  groupProj4,
  groupProj5,
]

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioWrapper>
      <ProjectCardWrapper>
        <StyledPortfolioImage src={nodb} alt="" />
        <StyledPortfolioContent>
          <StyledPortfolioTitle>NoDB</StyledPortfolioTitle>
          <StyledPortfolioDescription>
            This was my first project in school. This was where I was able to
            really start exploring with everything we had been taught in the
            first 3 weeks.
          </StyledPortfolioDescription>
          <Carousel images={nodb} />
        </StyledPortfolioContent>
      </ProjectCardWrapper>
      <ProjectCardWrapper>
        <StyledPortfolioImage src={persproj1} alt="" />
        <StyledPortfolioContent>
          <StyledPortfolioTitle>Personal Project</StyledPortfolioTitle>
          <StyledPortfolioDescription>
            My Personal Project that I worked on was focused around a website to
            help animal shelters get more attention. I was able to work with
            multiple APIs such as google and Stripe as well as deepening my
            understanding of React, node and redux.
          </StyledPortfolioDescription>
          <Carousel images={persProjPic} />
        </StyledPortfolioContent>
      </ProjectCardWrapper>
      <ProjectCardWrapper>
        <StyledPortfolioImage src={groupProj1} alt="" />
        <StyledPortfolioContent>
          <StyledPortfolioTitle>Group Project</StyledPortfolioTitle>
          <StyledPortfolioDescription>
            For The GroupProject my team and I put effort into creating a job
            posting website geared towards web development. It allows for 2
            different loggins from an employer or an applicant and tracks what
            jobs an employer has posted and what jobs have been applied to.
          </StyledPortfolioDescription>
          <Carousel images={groupProjPic} />
        </StyledPortfolioContent>
      </ProjectCardWrapper>
    </PortfolioWrapper>
  </Layout>
)

export default SecondPage
